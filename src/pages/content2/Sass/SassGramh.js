import React, { Component } from 'react';
import Panel from '../../../components/Panel';
import SessionHead from '../../../components/SessionHead';
import SplitLine from '../../../components/SplitLine';
import In from '../../../components/Indent';
import NoteTip from '../../../components/NoteTip';
import CodeSession from '../../../components/CodeSession';
  class CssGramh extends Component{
    render(){
      return(
        <Panel title="Sass高级语法">
          <div className="content-container">
            <SessionHead title="Imports"/>
            <dl>
              <dd>imports允许将总的样式分割成小文件，并在另一个文件中导入。这对于组织方式和编写速度来说是神奇的。</dd>
              <dd>我们可以使用@import指令导入.scss文件：</dd>
            </dl>
            <CodeSession>
              @import "grids.scss";
            </CodeSession>
            <div>
              实际上，你都不需要写扩展名：
            </div>
            <CodeSession>
              @import "grids";
            </CodeSession>          
            <div>Sass编译器还有一个“partials”的概念。如果.sass或.scss文件名有一个下划线前缀，那么它就不会被编译成CSS。
              如果你的文件只是被引用到主体样式style.scss中而并不需要编译，这个特性就会很有用。</div>
            <SplitLine/>

            <SessionHead title="扩展和占位符"/>
            <div>在Sass中，@extend 指令是继承既有样式的标准方式。</div>
            <div>让我们使用@extend指令扩展一个input样式——指向input-error类：</div>
            <CodeSession>
              <p>.input &#123;</p>
                <In>border-radiu&#58;3px;</In>
                <In>color&#58;#555;</In>
              <p>&#125;</p>
              <p>.error-input &#123;</p>
                <In>@extend .input;</In>
                <In>border&#58;4px solid #e74c3c;</In>
              <p>&#125;</p>
            </CodeSession>
            <NoteTip title="在上面这个例子中，@extend不会简单地复制.input中的样式到.error-input中，而是在.input后加上.error-input"/>
            <div>但如果我们想声明的扩展来自尚未实现的样式集，那该如何做呢？占位符选择器就可以解决这个问题。</div>
            <CodeSession>
              <p> %input-style &#123;</p>
                <In>font-size&#58;14px;</In>
              <p>&#125;</p>
              <p>input &#123;</p>
                <In>@extend .%input-style;</In>
                <In>color&#58;black;</In>
              <p>&#125;</p>
            </CodeSession>           
            <div>声明占位符选择器需要在目标类名上前缀一个%符号。只有当扩展它的元素被渲染时，占位符选择器才会被编译输出。</div>
            <div>也就是引用一个并不存在的元素的样式表的css内容</div>                
            <SplitLine/>

            <SessionHead title="混合宏"/>
            <div>混合宏是Sass令人惊艳的特性，因为它在让你实现类似@extend功能的同时还提供了传参的功能。</div>
            <div>Sass使用@mixin指令定义混合宏，并使用@include指令引入。让我们构建一个简单的混合宏实现媒体查询吧。</div>
            <div>第一步是定义混合宏：</div>
            <CodeSession>
              <p> @mixin media($queryString) &#123;</p>
                <In>//</In>
              <p>&#125;</p>            
            </CodeSession>
            <div>注意我们在混合宏media中声明了一个$queryString参数。
              当我们引入混合宏时，可以一个字符串参数以实现动态渲染。勇敢试一下吧：</div>     
              <CodeSession>
              <p>@mixin media($queryString) &#123;</p>
                  <In>@media #&#123;$queryString&#125; &#123;</In>
                      <In><In>@content;</In></In>
                  <In>&#125;</In>
              <p>&#125;</p>            
            </CodeSession>
            <div>因为我们期待字符串参数被目标函数使用，所以使用了Sass的插值语法，
              #{}。当你传递变量到这个括号中时，变量会像字符串一样输出而不是进行某种逻辑运算。</div>    
            <div>这个例子中另一个生疏的地方是@content指令。
              当你使用的混合宏后接被大括号包裹的样式，那么被包裹样式就可以通过@content指令加以使用。</div>
            <div>最后，让我们使用混合宏和@include指令试一下实现渲染媒体查询吧：</div>
            <CodeSession>
              <p>@mixin media($queryString) &#123;</p>
                  <In>@media #&#123;$queryString&#125; &#123;</In>
                      <In><In>@content;</In></In>
                  <In>&#125;</In>
              <p>&#125;</p> 
              <br/> 
              <p>.container &#123;</p>
                  <In>width&#58;900px;</In>
                  <In>@include media("(max-width: 767px)")&#123;</In>
                      <In><In>width&#58; 100%;</In></In>
                  <In><p>&#125;</p></In>
              <p>&#125;</p>            
            </CodeSession>
            <div>其实际的运行结果如下：</div>
            <CodeSession>
              <p>.container &#123;</p>
                  <In>width&#58;900px;</In>
              <p>&#125;</p> 
              <p>@media (max-width: 767px) &#123;</p>
                  <In>.container&#123;</In>
                      <In><In>width&#58; 100%;</In></In>
                  <In><p>&#125;</p></In>
              <p>&#125;</p>                 
            </CodeSession>
            <SplitLine/>

            <SessionHead title="函数指令"/>
            <div>在Sass中，函数指令类似于混合宏，它们会通过@return指令返回值而不是返回样式。这可以降低代码中的重复率并提高可读性。</div>
            <div>让我们创建一个函数指令以清除grid例子中的grid运算式：</div>
            <CodeSession>
              <p>@function getColumnWidth($width, $columns,$margin) &#123;</p>
                  <In>@return ($width / $columns) - ($margin * 2);</In>
              <p>&#125;</p>                      
            </CodeSession>
            <div>现在就可以在代码中使用这个函数了：</div>
            <CodeSession>
              <p>$container-width &#58;100%;</p>
              <p>$column-count &#58;4;</p>
              <p>$margin &#58;1%;</p>
              <p>.container &#123;</p>
              <In>width&#58; $container-width;</In>
              <p>&#125; </p>     
              <p>.column &#123;</p>
              <In>width&#58; getColumnWidth($container-width,$column-count,$margin);</In>
              <p>&#125; </p>      
            </CodeSession>
          </div>
        </Panel>
        )
    }
  }
export default CssGramh;