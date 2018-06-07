/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 * 
 *   http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
package com.weex.app.extend;

import android.graphics.Bitmap;
import android.graphics.Color;
import android.net.Uri;
import android.text.TextUtils;
import android.util.Log;
import android.widget.ImageView;

import com.facebook.common.references.CloseableReference;
import com.facebook.datasource.DataSource;
import com.facebook.drawee.backends.pipeline.Fresco;
import com.facebook.imagepipeline.common.ImageDecodeOptions;
import com.facebook.imagepipeline.core.ImagePipeline;
import com.facebook.imagepipeline.datasource.BaseBitmapDataSubscriber;
import com.facebook.imagepipeline.image.CloseableImage;
import com.facebook.imagepipeline.request.ImageRequest;
import com.facebook.imagepipeline.request.ImageRequestBuilder;
import com.taobao.weex.WXSDKManager;
import com.taobao.weex.adapter.IWXImgLoaderAdapter;
import com.taobao.weex.common.WXImageStrategy;
import com.taobao.weex.dom.WXImageQuality;

import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;

import javax.annotation.Nullable;

public class ImageAdapter implements IWXImgLoaderAdapter {

  private final ThreadPoolExecutor poolExecutor;
  private static final String TAG = "ImageAdapter";
  public ImageAdapter() {
    poolExecutor = new ThreadPoolExecutor(128, 128,
            10, TimeUnit.SECONDS, new LinkedBlockingQueue<Runnable>());
    poolExecutor.allowCoreThreadTimeOut(true);
  }

  @Override
  public void setImage(final String url, final ImageView view,
                       WXImageQuality quality, final WXImageStrategy strategy) {

    WXSDKManager.getInstance().postOnUiThread(new Runnable() {

      @Override
      public void run() {
        if(view==null||view.getLayoutParams()==null){
          return;
        }
        if (TextUtils.isEmpty(url)) {
          view.setImageBitmap(null);
          return;
        }
        String temp = url;
        if (url.startsWith("//")) {
          temp = "http:" + url;
        }
        if (view.getLayoutParams().width <= 0 || view.getLayoutParams().height <= 0) {
          return;
        }


        ImageDecodeOptions decodeOptions = ImageDecodeOptions.newBuilder()
                .setBackgroundColor(Color.GREEN)
                .build();

        ImageRequest request = ImageRequestBuilder
                .newBuilderWithSource(Uri.parse(temp))
                .setImageDecodeOptions(decodeOptions)
                .setAutoRotateEnabled(true)
                .setLocalThumbnailPreviewsEnabled(true)
                .setLowestPermittedRequestLevel(ImageRequest.RequestLevel.FULL_FETCH)
                .setProgressiveRenderingEnabled(false)
                /*.setResizeOptions(new ResizeOptions(width, height))*/
                .build();

        ImagePipeline imagePipeline = Fresco.getImagePipeline();
        final DataSource<CloseableReference<CloseableImage>> dataSource = imagePipeline.fetchDecodedImage(request, null);
        dataSource.subscribe(new BaseBitmapDataSubscriber() {

          @Override
          protected void onFailureImpl(DataSource<CloseableReference<CloseableImage>> dataSource) {
            Log.d(TAG, "onFailureImpl() called with: dataSource = [" + dataSource + "]");
          }

          @Override
          protected void onNewResultImpl(final @Nullable Bitmap bitmap) {
            if (bitmap !=null && !bitmap.isRecycled()) {
              view.post(new Runnable() {
                @Override
                public void run() {
                  view.setImageBitmap(bitmap);
                }
              });
            }
          }
        },poolExecutor);
//        if(!TextUtils.isEmpty(strategy.placeHolder)){
//          Picasso.Builder builder=new Picasso.Builder(WXEnvironment.getApplication());
//          Picasso picasso=builder.build();
//          picasso.load(Uri.parse(strategy.placeHolder)).into(view);
//
//          view.setTag(strategy.placeHolder.hashCode(),picasso);
//        }
//
//        Picasso.with(WXEnvironment.getApplication())
//            .load(temp)
//            .transform(new BlurTransformation(strategy.blurRadius))
//            .into(view, new Callback() {
//              @Override
//              public void onSuccess() {
//                if(strategy.getImageListener()!=null){
//                  strategy.getImageListener().onImageFinish(url,view,true,null);
//                }
//
//                if(!TextUtils.isEmpty(strategy.placeHolder)){
//                  ((Picasso) view.getTag(strategy.placeHolder.hashCode())).cancelRequest(view);
//                }
//              }
//
//              @Override
//              public void onError() {
//                if(strategy.getImageListener()!=null){
//                  strategy.getImageListener().onImageFinish(url,view,false,null);
//                }
//              }
//            });
      }
    },0);
  }
}
