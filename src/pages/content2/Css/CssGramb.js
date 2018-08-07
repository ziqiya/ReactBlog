import React, { Component } from 'react';
import Panel from '../../../components/Panel';
import SessionHead from '../../../components/SessionHead';
import SplitLine from '../../../components/SplitLine';
import Img from '../../../components/Img';
import In from '../../../components/Indent';
import NoteTip from '../../../components/NoteTip';
import CodeSession from '../../../components/CodeSession';
  class CssGramb extends Component{
    render(){
      return(
        <Panel title="CSS基础语法">
          <div className="content-container">
            <SessionHead title="CSS语法"/>
            <dl>
              <dt>CSS 规则由两个主要的部分构成：选择器，以及一条或多条声明。</dt>
              <dd>选择器通常是您需要改变样式的 HTML 元素。</dd>
              <dd>每条声明由一个属性和一个值组成。</dd>
              <dd>属性（property）是您希望设置的样式属性（style attribute）。每个属性有一个值。属性和值被冒号分开。</dd>
            </dl>
            <CodeSession>
              selector &#123;property &#58; value&#125;
            </CodeSession>
            <SplitLine/>
            <div>下面这行代码的作用是将 h1 元素内的文字颜色定义为红色，同时将字体大小设置为 14 像素。</div>
            <div>在这个例子中，h1 是选择器，color 和 font-size 是属性，red 和 14px 是值。</div>
            <CodeSession>
              h1 &#123;color&#58;red; font-size&#58;14px;&#125;
            </CodeSession>
            <div>
              下面的示意图为您展示了上面这段代码的结构：
            </div>
            <Img src={require("../../../images/css_selector.gif")} alt="css选择器"/>
            <NoteTip title="提示：请使用花括号来包围声明。"/>
            <SplitLine/>

            <SessionHead title="记得写引号"/>
            <NoteTip title="提示：如果值为若干单词，则要给值加引号："/>
            <CodeSession>
              p &#123;font-family &#58; "sans serif";&#125;          
            </CodeSession>
            <dl>
              <dd>这个 &lt;p&gt; 元素使用了sans serif字体。</dd>
            </dl>
            <SplitLine/>

            <SessionHead title="多重声明："/>
            <NoteTip title="提示：如果要定义不止一个声明，则需要用分号将每个声明分开。下面的例子展示出如何定义一个红色文字的居中段落。
              最后一条规则是不需要加分号的，因为分号在英语中是一个分隔符号，不是结束符号。然而，大多数有经验的设计师会在每条声明的末尾都加上分号，
              这么做的好处是，当你从现有的规则中增减声明时，会尽可能地减少出错的可能性。就像这样："/>
            <CodeSession>
              p &#123;text-align&#58;center;color&#58;red;&#125;   
            </CodeSession>
            <div>你应该在每行只描述一个属性，这样可以增强样式定义的可读性，就像这样：</div>
            <CodeSession>
              <p>p &#123;</p>
                <In>text-align&#58; center;</In>
                <In>color&#58; black;</In>
                <In>font-family&#58; arial;</In>
              <p>&#125; </p>
            </CodeSession>
            <SplitLine/>
            
            <SessionHead title="空的 HTML 元素"/>
            <dl>
              <dd>没有内容的 HTML 元素被称为空元素。空元素是在开始标签中关闭的。</dd>
              <dd>&lt;br&gt; 就是没有关闭标签的空元素（&lt;br&gt; 标签定义换行）。</dd>
              <dd>在 XHTML、XML 以及未来版本的 HTML 中，所有元素都必须被关闭。</dd>
              <dd>在开始标签中添加斜杠，比如 &lt;br /&gt;，是关闭空元素的正确方法，HTML、XHTML 和 XML 都接受这种方式。</dd>
              <dd>即使 &lt;br&gt; 在所有浏览器中都是有效的，但使用 &lt;br /&gt; 其实是更长远的保障。</dd>
            </dl>
            <SplitLine/>

            <SessionHead title="HTML 提示：使用小写标签"/>
            <dl>
              <dd>HTML 标签对大小写不敏感：&lt;P&gt; 等同于 &lt;p&gt;。许多网站都使用大写的 HTML 标签。</dd>
              <dd>W3School 使用的是小写标签，因为万维网联盟（W3C）在 HTML 4 中推荐使用小写，而在未来 (X)HTML 版本中强制使用小写。</dd>
            </dl>
          </div>
        </Panel>
        )
    }
  }
export default CssGramb;