package com.weex.app;

import android.app.Application;
import android.os.Build;

import com.alibaba.weex.plugin.loader.WeexPluginContainer;
import com.facebook.cache.disk.DiskCacheConfig;
import com.facebook.common.internal.Supplier;
import com.facebook.drawee.backends.pipeline.Fresco;
import com.facebook.imagepipeline.cache.MemoryCacheParams;
import com.facebook.imagepipeline.core.ImagePipelineConfig;
import com.squareup.okhttp.OkHttpClient;
import com.taobao.weex.InitConfig;
import com.taobao.weex.WXSDKEngine;
import com.taobao.weex.common.WXException;
import com.weex.app.extend.ImageAdapter;
import com.weex.app.extend.WXEventModule;
import com.weex.app.util.AppConfig;
import com.weex.app.widget.CustomView;

import java.io.File;

public class WXApplication extends Application {

    @Override
    public void onCreate() {
        super.onCreate();
        WXSDKEngine.addCustomOptions("appName", "WXSample");
        WXSDKEngine.addCustomOptions("appGroup", "WXApp");
        WXSDKEngine.initialize(this,
                new InitConfig.Builder().setImgAdapter(new ImageAdapter()).build()
        );
        DiskCacheConfig diskCacheConfig = DiskCacheConfig
                .newBuilder(this)
                .setBaseDirectoryName("fresco")
                .setBaseDirectoryPath(new File("/mnt/sdcard/ColorOs/"))
                .setMaxCacheSize(150 * 1024 * 1024)
                .build();
        int currentSize = (int) Runtime.getRuntime().maxMemory() / 6;
        ImagePipelineConfig config = ImagePipelineConfig.newBuilder(this)
                .setMainDiskCacheConfig(diskCacheConfig)
                .setBitmapMemoryCacheParamsSupplier(new Supplier<MemoryCacheParams>() {
                    @Override
                    public MemoryCacheParams get() {
                        final MemoryCacheParams bitmapCacheParams = new MemoryCacheParams(
                                30 * 1024 * 1024 , // Max total size of elements in the cache
                                Integer.MAX_VALUE,                     // Max entries in the cache
                                30 * 1024 * 1024, // Max total size of elements in eviction queue
                                Integer.MAX_VALUE,                     // Max length of eviction queue
                                Integer.MAX_VALUE);                    // Max cache entry size
                        return bitmapCacheParams;
                    }
                })
                .build();
        Fresco.initialize(this, config);
        try {
            WXSDKEngine.registerModule("event", WXEventModule.class);
        } catch (WXException e) {
            e.printStackTrace();
        }
        AppConfig.init(this);
        WeexPluginContainer.loadAll(this);
        //initDebugEnvironment(true, "172.17.154.151"/*"DEBUG_SERVER_HOST"*/);

        initComponent();
    }

    private void initComponent() {
        try {
            WXSDKEngine.registerComponent("circleView", CustomView.class);
        } catch (WXException e) {
            e.printStackTrace();
        }
    }
}
