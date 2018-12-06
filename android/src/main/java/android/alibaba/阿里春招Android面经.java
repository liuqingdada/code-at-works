package android.alibaba;

import android.app.Activity;
import android.content.Context;
import android.graphics.Canvas;
import android.os.Bundle;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;

import com.subor.vr.myapplication.R;

import org.xmlpull.v1.XmlPullParser;

/**************************************************************************
***************************************************************************
链接：
https://www.jianshu.com/p/a07ccaad832d

android中的dp、px、dip相关概念:
    px: pixel，即像素，1px代表屏幕上的一个物理的像素点。但px单位不被建议使用。由于分辨率不同，同样像素大小的图片在不同手机显示的实际大小可能不同。
        要用到px的情况是需要画1像素表格线或阴影线的时候，如果用其他单位画则会显得模糊。

    dip (dp): device independent pixel。dp (dip)是最常用也是最难理解的尺寸单位。与像素密度密切相关。Android系统定义了四种像素密度：
        类型	    dpi	    density
        ldpi	120	    0.75
        mdpi	160	    1.0
        hdpi	240	    1.5
        xhdpi	320	    2.0

        其中 density 表示对应的dp到px的系数，这个系数乘以dp长度就是像素数。例如界面上有一个长度为“80dp”的图片，
        那么它在240dpi的手机上实际显示为80x1.5=120px，在320dpi的手机上实际显示为80x2=160px。
        如果你拿这两部手机放在一起对比，会发现这个图片的物理尺寸“差不多”，这就是使用dp作为单位的效果。

    sp: Scale-independent Pixel，即与缩放无关的抽象像素。sp和dp很类似但唯一的区别是，
        Android系统允许用户自定义文字尺寸大小（小、正常、大、超大等等），
        当文字尺寸是“正常”时，1sp=1dp=0.00625英寸，而当文字尺寸是“大”或“超大”时，1sp>1dp=0.00625英寸。
        类似我们在windows里调整字体尺寸以后的效果——窗口大小不变，只有文字大小改变。


 */

/***************************************************************************
****************************************************************************
布局相关的<merge>、<viewstub>控件作用及实现原理;  android中的布局优化; relativelayout和LinearLayout在实现效果同等情况下选择使用哪个？为什么？
    一、 include: 为了解决重复定义相同布局的问题
    <include
            android:id="@+id/my_title_ly"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            layout="@layout/my_title_layout" />

    注意：一定要使用include的id获取到RootView，用RootView再去findViewByID；或者直接findViewById；
        如果通过findViewById来找{@layout/my_title_layout}这个布局的跟View，然后再查找{@layout/my_title_layout}下的子控件则会抛出空指针

    源码分析：对于布局文件的解析，最终都会调用到LayoutInflater的inflate方法，该方法最终又会调用rInflate方法
    {@link android.view.LayoutInflater#rInflate(XmlPullParser parser, View parent, Context context,
            AttributeSet attrs, boolean finishInflate)};
    {@link LayoutInflater#parseInclude(XmlPullParser parser, Context context, View parent,
            AttributeSet attrs)}
    会判断include标签的id如果不是View.NO_ID的话会把该id设置给被引入的布局根元素的id

    所以结论就是： 如果include中设置了id，那么就通过include的id来查找被include布局根元素的View；
        如果include中没有设置Id, 而被include的布局的根元素设置了id，那么通过该根元素的id来查找该view即可。
        拿到根元素后查找其子控件都是一样的。

    ================================================

    二、 ViewStub: 是一个宽高都为0的一个View，它默认是不可见的，
        只有通过调用setVisibility函数或者Inflate函数才会将其要装载的目标布局给加载出来，
        从而达到延迟加载的效果，这个要被加载的布局通过android:layout属性来设置。

        <ViewStub
            android:id="@+id/stub_import"
            android:inflatedId="@+id/stub_comm_lv"
            android:layout="@layout/my_comment_layout"
            android:layout_width="fill_parent"
            android:layout_height="wrap_content"
            android:layout_gravity="bottom" />

        方式一：
        在运行时，我们只需要控制id为stub_import的ViewStub的可见性或者调用inflate()函数来控制是否加载这个{@layout/my_comment_layout}即可
        ViewStub listStub = (ViewStub) findViewById(R.id.stub_import);
        listStub.setVisibility(View.VISIBLE);
        // 获取到评论ListView，注意这里是通过ViewStub的inflatedId来获取
        ListView commLv = findViewById(R.id.stub_comm_lv);

        通过setVisibility(View.VISIBILITY)来加载{@layout/my_comment_layout}，此时你要获取到评论ListView对象的话，
        则需要通过findViewById来查找，而这个id并不是就是ViewStub的id
        源码分析：{@link android.view.ViewStub} 获取到根元素后，如果mInflatedId不为NO_ID则把mInflatedId设置为根元素的id;
        当然如果你没有设置inflatedId的话还是可以通过{@layout/my_comment_layout}的id来获取的

        方式二， 加载目标布局的就是直接调用ViewStub的inflate()方法，示例如下 :
        ViewStub listStub2 = (ViewStub) findViewById(R.id.stub_import);
        // 成员变量commLv2为空则代表未加载
        if ( commLv2 == null ) {
        // 加载评论列表布局, 并且获取评论ListView,inflate函数直接返回ListView对象
        commLv2 = (ListView)listStub2.inflate();
        } else {
        // ViewStub已经加载
        }

        注意事项:
        1.判断是否已经加载过， 如果通过setVisibility来加载，那么通过判断可见性即可；
        如果通过inflate()来加载是不可以通过判断可见性来处理的，而需要使用方式2来进行判断。
        2.findViewById的问题，注意ViewStub中是否设置了inflatedId，如果设置了则需要通过inflatedId来查找目标布局的根元素。
        !!!! 建议使用方式二

    ================================================

    三、 Merge: 其实就是减少在include布局文件时的层级。
        标签是这几个标签中最让我费解的，大家可能想不到，标签竟然会是一个Activity，里面有一个LinearLayout对象
        <merge xmlns:android="http://schemas.android.com/apk/res/android">
            <ImageView
            android:layout_width="fill_parent"
            android:layout_height="fill_parent"
            android:scaleType="center"
            android:src="@drawable/golden_gate" />

        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginBottom="20dip"
            android:layout_gravity="center_horizontal|bottom"
            android:padding="12dip"
            android:background="#AA000000"
            android:textColor="#ffffffff"
            android:text="Golden Gate" />
        </merge>
        源码分析: {@link android.view.LayoutInflater#inflate(int, ViewGroup)};
        {@link android.view.LayoutInflater#rInflate(XmlPullParser parser, View parent,
                Context context,AttributeSet attrs, boolean finishInflate)}
        // viewGroup.addView(view, params);  // 最后是这样的
        其实就是如果是merge标签，那么直接将其中的子元素添加到merge标签parent中，这样就保证了不会引入额外的层级。

        总结：
        1.因为merge标签并不是View,所以在通过LayoutInflate.inflate()方法渲染的时候,第二个参数必须指定一个父容器,
        且第三个参数必须为true,也就是必须为merge下的视图指定一个父亲节点.
        2.因为merge不是View,所以对merge标签设置的所有属性都是无效的.
        3.注意如果include的layout用了merge,调用include的根布局也使用了merge标签,那么就失去布局的属性了
        4.merge标签必须使用在根布局
        5.ViewStub标签中的layout布局不能使用merge标签(源码：ViewStub不可绘制，宽高是0，不可见)
        6.merge并不是一个ViewGroup，也不是一个View，它相当于声明了一些视图，等待被添加

        实践：
        如果Activity的布局文件根节点是FrameLayout，可以替换为merge标签，这样，执行setContentView之后，会减少一层FrameLayout节点
        自定义View如果继承LinearLayout，建议让自定义View的布局文件根节点设置成merge，这样能少一层结点。

    ================================================

    四、 性能优化
        1.布局性能：
            性能耗费低的布局 = 功能简单 = FrameLayout、LinearLayout
            性能耗费高的布局 = 功能复杂 = RelativeLayout
        2.减少布局嵌套：
            ConstraintLayout、RelativeLayout、<merge>
        3.布局复用：
            <include>
        4.减少布局测量、绘制时间：
            尽可能少用布局属性 wrap_content
                布局属性 wrap_content 会增加布局测量时计算成本，应尽可能少用,在已知宽高为固定值时，不使用wrap_content
            <ViewStub>

        5.布局调优工具:
            hierarchy viewer、Lint、Systrace、TraceView

 */

/*********************************************************************
**********************************************************************
 view的工作原理及measure、layout、draw流程，源码?
    一、 MEASURE：

    1.window的层级：
    FrameLayout mDecorView -> {
        LinearLayout -> {
            FrameLayout titleBar;
            FrameLayout contentView; // setContentView()
        }
    }
    注意：StatusBar属于SystemUI

    2.ViewRoot：
    ViewRoot是连接 WindowsManager 和 DecorView 的桥梁对应于ViewRootImpl。
    View的绘制流程就是从 ViewRootImpl 的 performTraversala（）方法开始的，包含三大流程：
    1、Measure（）：［ 测量流程］
    2、Layout（）：［布局流程］
    3、Draw（）：［绘制流程］

    MeasureSpec：
        从名字上来看看起来是“测量规格“或是”测量说明书“。大致意思就是决定View的Measure过程。
        我们可以这样来理解：”MeasureSpec在很大程度上决定了一个View的尺寸规格，之所以这样说是很大程度上是因为这个过程还受父容器的影响，
        因为父容器影响View的MeasureSpec的创建过程。“

    MeasureSpec代表一个32位int值，高2位代表SPecMode（测量模式），低30位代表SpecSize（在某种测量模式下的规格大小）。
        UNSPECIFIED（未指定模式）
            父容器不对View有任何限制，要多大给多大。
        EXACTLY（确定模式）
            父容器已检测出View所需要的精确大小，这时候View的最终大小就是SpecSize指定的值，它对应于LayoutParams中的match_parent和具体指定的数值这两种模式。
        AT_MOST（最多模式）
            父容器指定一个可用大小即SpecSize，View的代销不能大于这个值。对应于wrap_content。
     有些读者会问：那么顶级View（DecorView）怎么转换昵？
     对于顶级View：MeasureSpec有窗口尺寸和自身的LayoutParams来共同决定。
     对于普通View：由父容器的MeasureSpec和自身的LayoutParams共同来决定。

    总结：
    {@link android.app.ActivityThread#handleResumeActivity} // 实际上是AWS完成Activity的onResume回调, 此时addView的参数就是DecorView
    WindowManager(WindowManagerGlobal) -> addView() -> {
        new ViewRootImpl() -> {
            loadSystemProperties(); -> {
                profileRendering(); -> {
                    mChoreographer.postFrameCallback(mRenderProfiler); -> {
                        scheduleTraversals(); -> {
                            mChoreographer.postCallback(
                                Choreographer.CALLBACK_TRAVERSAL, mTraversalRunnable, null); -> { // mTraversalRunnable 的run方法
                                    doTraversal(); -> {
                                        performTraversals();
                                    }
                                }
                        }
                    }
                }
            }
        }
    }
    ViewRootImpl -> performTraversals() { // {@link ViewRootImpl#getRootMeasureSpec(int windowSize, int rootDimension)}
        childWidthMeasureSpec = getRootMeasureSpec(baseSize, lp.width);
        childHeightMeasureSpec = getRootMeasureSpec(desiredWindowHeight, lp.height); -> {
            // switch rootDimension -> measureSpec
            MeasureSpec的静态方法,真实去计算size;
        }
        performMeasure(childWidthMeasureSpec, childHeightMeasureSpec); -> {
            mView.measure(childWidthMeasureSpec, childHeightMeasureSpec); // mView 要么是ViewGroup要么就是一个View, 我们写的布局通常都是ViewGroup吧！！！
        }
        ...
        performLayout(***);

        ...
        performDraw();
    }

    对于普通View(非ViewGroup) -> onMeasure
    对于ViewGroup: measure -> onMeasure -> ...
        最终会 -> {
        measureChildWithMargins(***) {
            // 考虑上parent的padding和child的margin
            getChildMeasureSpec(***) -> {
                //根据SpecMode
                //MeasureSpec的静态方法,真实去计算size;
            };
            // 这里如果child是个ViewGroup类型，则实际会递归下去。。。
            child.measure(childWidthMeasureSpec, childHeightMeasureSpec); -> {
                // child如果是View, 会回调
                // measure ourselves, this should set the measured dimension flag back
                onMeasure(widthMeasureSpec, heightMeasureSpec); // 这两个参数是父容器测量+自己适当调整后的结果
            }
        }
    }

    ViewGroup的getChildMeasureSpec方法说明 {@link android.view.ViewGroup#getChildMeasureSpec(int, int, int)}：
    // 这个方法是协商型的，最终结果既可能直接由spec（parent提供的），也可能由childDimension决定
    // 所以我们知道了，一个View的大小不是简单的单方面决定的，而是通过一系列条件协商的结果，
    // 有时会尊重parent的spec，有时会坚持自己的dimension要求

    onMeasure() -> {
        setMeasuredDimension(
            getDefaultSize(
                getSuggestedMinimumWidth();
                getSuggestedMinimumHeight(); -> {
                    就是看View有没有设置背景;
                    如果没有设置则View的宽／高为mMinWidth／mMinHeight;
                    如果设置了背景，则View的宽／高为：mMinWidth ~mBackground.getMinmumWidth() / mMinHeight ~mBackground.getMinmumHeight() 两者中较大的
                }
            );
        );
    }
    ＊注：mMinWidth ／ mMinheight ：View的android：minWidth／minHeight属性，如果没指定则默认为0.
         mBackground.getMinmumWidth() ／getMinmumHeight()  返回背景的原始宽度，如果未设置则返回0.

    在渲染前获取 View 的宽高:
        {@link android.app.Activity#onWindowFocusChanged(boolean)} / {@link android.view.View#onWindowFocusChanged(boolean)}
        {@link android.view.View#post(Runnable)}
        {@link android.view.View#measure(int, int)} 通过手动去measure来视图得到view的宽高
            1.match_parent
                直接放弃，无法 measure 出具体的宽高
            2.具体的数值（ dp/px ） 比如宽高都是 100px ，如下 measure ：
                int widthMeasureSpec = MeasureSpec.makeMeasureSpec(100, MeasureSpec.EXACTLY);
                int heightMeasureSpec = MeasureSpec.makeMeasureSpec(100, MeasureSpec.EXACTLY);
                view.measure(widthMeasureSpec, heightMeasureSpec);
            3.wrap_content:
                int widthMeasureSpec = MeasureSpec.makeMeasureSpec( (1 << 30) - 1, MeasureSpec.AT_MOST);
                int heightMeasureSpec = MeasureSpec.makeMeasureSpec( (1 << 30) - 1, MeasureSpec.AT_MOST);
                view.measure(widthMeasureSpec, heightMeasureSpec);

    二、 Layout和Draw:

    performLayout(***) -> {
        host.layout(0, 0, host.getMeasuredWidth(), host.getMeasuredHeight());
        {@link android.view.View#layout(int, int, int, int)}
        {@link android.view.ViewGroup#layout(int, int, int, int)}

        // 如果是普通View只需要通过{@link android.view.View#setFrame(int left, int top, int right, int bottom)}确定位置
        // 如果是ViewGroup那么需要具体子类去实现 (layout也是一个自上而下的过程，先设置父视图位置，在循环子视图，父视图位置一定程度上决定了子视图位置)
    }

    performDraw(); -> {
        try {
            draw(fullRedrawNeeded); -> {
                drawSoftware(***) -> {
                    mView.draw(canvas); // mView 是通过ViewRootImpl的setView进来的, 也就是 DecorView

                    1.{@link android.view.View#draw(Canvas)} // 会调用 dispatchDraw 方法 // 会回调 onDraw
                    2.ViewGroup 没有重写draw方法, 提供了一个{@link android.view.ViewGroup#drawChild(Canvas, View, long)}方法
                    //{@link android.view.ViewGroup#dispatchDraw(Canvas)}
                    3.{@link android.view.View#dispatchDraw(Canvas)} // 空实现
                }
            }
        }
    }
 */

/****************************************************************
*****************************************************************
 UI刷新重绘 ：invalidate() 、postInvalidate()、requestLayout() 总结

 ① invalidate() ：
     请求重绘View树，即draw()过程。把例子中他是整个刷新着UI，并且从头到尾并不会触发onMeasure（）方法（控制大小用）。如果是View就重绘View,如果是ViewGroup就全部重绘。
     一般引起invalidate()操作的函数如下：
     1、直接调用invalidate()方法，请求重新draw()，但只会绘制调用者本身。
     2、setSelection()方法 ：请求重新draw()，但只会绘制调用者本身。
     3、setVisibility()方法 ： 当View可视状态在INVISIBLE转换VISIBLE时，会间接调用invalidate()方法，继而绘制该View。
     4 、setEnabled()方法 ： 请求重新draw()，但不会重新绘制任何视图包括该调用者本身。

 ②postInvalidate();
    与invalidate()方法区别就是，postInvalidate()方法可以在UI线程执行，也可以在工作线程执行
    而invalidate()只能在UI线程操作。但是从重绘速率讲：invalidate()效率高。

 ③ requestLayout()
    他跟invalidate()相反，他只调用measure()和layout()过程，不会调用draw()。
    不会重新绘制任何视图包括该调用者本身。
 ④局部刷新
    使用 requestFocus()方法，他只刷新你要刷新的地方。
    他是让我们的某一部分获取焦点，获取焦点的会导致view的重绘。

 */

/*****************************************************************
******************************************************************
 补充红黑二叉树:
 R-B Tree，全称是Red-Black Tree，又称为“红黑树”，它一种特殊的二叉查找树。红黑树的每个节点上都有存储位表示节点的颜色，可以是红(Red)或黑(Black)。

 红黑树的特性:
 （1）每个节点或者是黑色，或者是红色。
 （2）根节点是黑色。
 （3）每个叶子节点（NIL）是黑色。 [注意：这里叶子节点，是指为空(NIL或NULL)的叶子节点！]
 （4）如果一个节点是红色的，则它的子节点必须是黑色的。
 （5）从一个节点到该节点的子孙节点的所有路径上包含相同数目的黑节点。
  注意：
  (01) 特性(3)中的叶子节点，是只为空(NIL或null)的节点。
  (02) 特性(5)，确保没有一条路径会比其他路径长出俩倍。因而，红黑树是相对是接近平衡的二叉树。

 红黑树的时间复杂度为: O(lgn)
 一棵含有n个节点的红黑树的高度至多为2log(n+1).


 */

public class 阿里春招Android面经 {
    /**
     * Exercise <merge /> tag in XML files.
     */
    public static class Merge extends Activity {
        private LinearLayout mLayout;

        @Override
        protected void onCreate(Bundle icicle) {
            super.onCreate(icicle);

            mLayout = new LinearLayout(this);
            mLayout.setOrientation(LinearLayout.VERTICAL);
            LayoutInflater.from(this)
                          .inflate(R.layout.merge_tag, mLayout);

            setContentView(mLayout);
        }

        public ViewGroup getLayout() {
            return mLayout;
        }
    }
}
