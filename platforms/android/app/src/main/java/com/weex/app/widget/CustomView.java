package com.weex.app.widget;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.text.TextPaint;
import android.text.TextUtils;
import android.util.AttributeSet;
import android.view.View;

import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.dom.WXDomObject;
import com.taobao.weex.ui.component.WXComponent;
import com.taobao.weex.ui.component.WXComponentProp;
import com.taobao.weex.ui.component.WXVContainer;

public class CustomView extends WXComponent<CustomView.CircleView> {
    public CustomView(WXSDKInstance instance, WXDomObject dom, WXVContainer parent) {
        super(instance, dom, parent);
    }

    public CustomView(WXSDKInstance instance, WXDomObject dom, WXVContainer parent, int type) {
        super(instance, dom, parent, type);
    }

    @WXComponentProp(name = "text")
    public void setText(String text) {
        getHostView().setText(text);
    }

    @Override
    protected CircleView initComponentHostView(@NonNull Context context) {
        CircleView circleView = new CircleView(context);
        return circleView;
    }

    public static class CircleView extends View {

        /**
         * 画笔
         */
        private final Paint mPaint = new Paint(Paint.ANTI_ALIAS_FLAG | Paint.DITHER_FLAG);

        private final TextPaint mTextPaint = new TextPaint(Paint.ANTI_ALIAS_FLAG | Paint.DITHER_FLAG);

        private String mText;

        public CircleView(Context context) {
            super(context);
            init();
        }

        public CircleView(Context context, @Nullable AttributeSet attrs) {
            super(context, attrs);
            init();
        }

        public CircleView(Context context, @Nullable AttributeSet attrs, int defStyleAttr) {
            super(context, attrs, defStyleAttr);
            init();
        }

        private void init() {
            mPaint.setStyle(Paint.Style.STROKE);
            mPaint.setColor(Color.RED);

            mTextPaint.setTextSize(36);
            mTextPaint.setColor(Color.BLUE);
        }

        @Override
        protected void onDraw(Canvas canvas) {
            canvas.drawCircle(getWidth() >> 1, getHeight() >> 1, getHeight() >> 1, mPaint);
            if (!TextUtils.isEmpty(mText)) {
                int start = (int) (getWidth() - mTextPaint.measureText(mText)) >> 1;
                int top = (int) (getWidth() - mTextPaint.getTextSize()) >> 1;
                canvas.drawText(mText, start, top, mTextPaint);
            }
        }

        public void setText(String mText) {
            this.mText = mText;
            invalidate();
        }
    }
}


