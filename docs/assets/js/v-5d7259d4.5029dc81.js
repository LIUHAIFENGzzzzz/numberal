"use strict";(self.webpackChunknumable=self.webpackChunknumable||[]).push([[352],{831:(n,s,a)=>{a.r(s),a.d(s,{default:()=>r});var e=a(314);const p=(0,e.uE)('<h2 id="use" tabindex="-1"><a class="header-anchor" href="#use" aria-hidden="true">#</a> use</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm install numable -S\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> numable <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;numable&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// or;</span>\n<span class="token keyword">import</span> numable <span class="token keyword">from</span> <span class="token string">&quot;numable&quot;</span><span class="token punctuation">;</span>\n<span class="token comment">// or;</span>\n<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;numable/dist/index.umd.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="create" tabindex="-1"><a class="header-anchor" href="#create" aria-hidden="true">#</a> Create</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> nnn <span class="token operator">=</span> <span class="token function">numable</span><span class="token punctuation">(</span><span class="token number">123456.123456</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="format" tabindex="-1"><a class="header-anchor" href="#format" aria-hidden="true">#</a> Format</h2>',6),t={href:"https://liuhaifengzzzzz.github.io/numable/example.html",target:"_blank",rel:"noopener noreferrer"},o=(0,e.Uk)("See the documentation for detailed formatting Settings"),l=(0,e.uE)('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> nnn <span class="token operator">=</span> <span class="token function">numable</span><span class="token punctuation">(</span><span class="token number">123456.123456</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>nnn<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;#,###&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// console =&gt; 123,456</span>\n\n<span class="token comment">// format</span>\n<span class="token comment">// #,### =&gt; 123,456</span>\n<span class="token comment">// ￥#,#### =&gt; ￥12,3456</span>\n<span class="token comment">// $#,##0.000 =&gt; $123,456.000</span>\n<span class="token comment">// 00000#,###.000000 =&gt; 00000123,456.000000</span>\n<span class="token comment">// #.#% =&gt; 12.3%</span>\n<span class="token comment">// #.00% =&gt; 12.30%</span>\n<span class="token comment">// ...</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="settings" tabindex="-1"><a class="header-anchor" href="#settings" aria-hidden="true">#</a> Settings</h2><p>Default Formatting</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>numable<span class="token punctuation">.</span><span class="token function">defaultOptions</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token literal-property property">currentLocal</span><span class="token operator">:</span> <span class="token string">&quot;zh-CN&quot;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">zeroFormat</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">nullFormat</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">defaultFormat</span><span class="token operator">:</span> <span class="token string">&quot;#,###&quot;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="local" tabindex="-1"><a class="header-anchor" href="#local" aria-hidden="true">#</a> Local</h2><p>Modify the default separator</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>numable<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">&quot;local&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;custom-local&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">decimal</span><span class="token operator">:</span> <span class="token string">&quot;.&quot;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">delimiter</span><span class="token operator">:</span> <span class="token string">&quot;,&quot;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nnumable<span class="token punctuation">.</span><span class="token function">local</span><span class="token punctuation">(</span><span class="token string">&quot;custom-local&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="custom-format" tabindex="-1"><a class="header-anchor" href="#custom-format" aria-hidden="true">#</a> Custom Format</h2><h3 id="example-1" tabindex="-1"><a class="header-anchor" href="#example-1" aria-hidden="true">#</a> Example 1</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>numable<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">&quot;format&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;percent&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">regexps</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(%)</span><span class="token regex-delimiter">/</span></span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function-variable function">format</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> pattern</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> scalePercentByValue <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> numable<span class="token punctuation">.</span>_<span class="token punctuation">.</span><span class="token function">numberToFormat</span><span class="token punctuation">(</span>value <span class="token operator">*</span> scalePercentByValue<span class="token punctuation">,</span> pattern<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="example-2" tabindex="-1"><a class="header-anchor" href="#example-2" aria-hidden="true">#</a> Example 2</h3><p>More Flexible formatting</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">numable</span><span class="token punctuation">(</span><span class="token number">123.456</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;#,###&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nnumable<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">&quot;format&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Example&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">regexps</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(@)</span><span class="token regex-delimiter">/</span></span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function-variable function">format</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> pattern<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> pattern<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// console =&gt; 123.456, #,###, 1 , 1, 2, 3, 4, 5</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>',13),c={},r=(0,a(637).Z)(c,[["render",function(n,s){const a=(0,e.up)("ExternalLinkIcon");return(0,e.wg)(),(0,e.iD)(e.HY,null,[p,(0,e._)("p",null,[(0,e._)("a",t,[o,(0,e.Wm)(a)])]),l],64)}]])},637:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}},397:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-5d7259d4",path:"/guide.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"use",slug:"use",children:[]},{level:2,title:"Create",slug:"create",children:[]},{level:2,title:"Format",slug:"format",children:[]},{level:2,title:"Settings",slug:"settings",children:[]},{level:2,title:"Local",slug:"local",children:[]},{level:2,title:"Custom Format",slug:"custom-format",children:[{level:3,title:"Example 1",slug:"example-1",children:[]},{level:3,title:"Example 2",slug:"example-2",children:[]}]}],git:{updatedTime:null,contributors:[]},filePathRelative:"guide.md"}}}]);