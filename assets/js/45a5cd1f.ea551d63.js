"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[0],{5680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>h});var n=a(6540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(a),u=r,h=c["".concat(l,".").concat(u)]||c[u]||m[u]||i;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3505:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=a(8168),r=(a(6540),a(5680));const i={},o="Concepts",s={unversionedId:"concepts",id:"concepts",title:"Concepts",description:"H2O LLM Studio is based on a few key concepts and uses several key terms across its documentation. Each, in turn, is explained within the sections below.",source:"@site/docs/concepts.md",sourceDirName:".",slug:"/concepts",permalink:"/h2o-llmstudio/concepts",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Videos",permalink:"/h2o-llmstudio/get-started/videos"},next:{title:"Supported data connectors and format",permalink:"/h2o-llmstudio/guide/datasets/data-connectors-format"}},l={},d=[{value:"LLM",id:"llm",level:2},{value:"Parameters and hyperparameters",id:"parameters-and-hyperparameters",level:2},{value:"LLM Backbone",id:"llm-backbone",level:2},{value:"Generative AI",id:"generative-ai",level:2},{value:"Foundation model",id:"foundation-model",level:2},{value:"Fine-tuning",id:"fine-tuning",level:2},{value:"LoRA (Low-Rank Adaptation)",id:"lora-low-rank-adaptation",level:2},{value:"Quantization",id:"quantization",level:2},{value:"8-bit model training with a low memory footprint",id:"8-bit-model-training-with-a-low-memory-footprint",level:2}],p={toc:d},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(c,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"concepts"},"Concepts"),(0,r.yg)("p",null,"H2O LLM Studio is based on a few key concepts and uses several key terms across its documentation. Each, in turn, is explained within the sections below."),(0,r.yg)("h2",{id:"llm"},"LLM"),(0,r.yg)("p",null,"A Large Language Model (LLM) is a type of AI model that uses deep learning techniques and uses massive datasets to analyze and generate human-like language. For example, many AI chatbots or AI search engines are powered by LLMs.  "),(0,r.yg)("p",null,"Generally speaking, LLMs can be characterized by the following parameters: "),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"size of the training dataset"),(0,r.yg)("li",{parentName:"ul"},"cost of training (computational power)"),(0,r.yg)("li",{parentName:"ul"},"size of the model (parameters)"),(0,r.yg)("li",{parentName:"ul"},"performance after training (or how well the model is able to respond to a particular question)")),(0,r.yg)("h2",{id:"parameters-and-hyperparameters"},"Parameters and hyperparameters"),(0,r.yg)("p",null,"In the context of an LLM, parameters and hyperparameters are a crucial part of determinining the model's performance and overall behaviour. "),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Parameters:")," The internal variables of the model that are learned during the training process. In the case of an LLM, parameters typically include the weights and biases associated with the neural network layers. The values of parameters directly influence the model's predictions and the quality of generated text.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Hyperparameters:")," The configuration choices that are set before training the model and are not learned directly from the data (e.g., number of epochs, batch size etc.). These choices impact the learning process and influence the model's overall behavior. Hyperparameters need to be tuned and optimized to achieve the best performance. H2O LLM Studio GUI shows tooltips next to each hyperparameter to explain what each hyperparameter is for. You can also see the following references for more details about hyperparameters in H2O LLM Studio."),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Dataset settings"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"./guide/experiments/experiment-settings"},"Experiment settings"))))),(0,r.yg)("h2",{id:"llm-backbone"},"LLM Backbone"),(0,r.yg)("p",null,"LLM Backbone is a key hyperparamter that determines the model's architecture. This option is the most important setting when it comes to experiment creation, as it sets the pretrained model weights. For more information about LLM Backbone, see ",(0,r.yg)("a",{parentName:"p",href:"/h2o-llmstudio/guide/experiments/experiment-settings#llm-backbone"},"Experiment settings"),"."),(0,r.yg)("h2",{id:"generative-ai"},"Generative AI"),(0,r.yg)("p",null,"Generative AI refers to AI models that can generate new content, such as images, videos, or text, that did not exist before. These models learn from large datasets and use this knowledge to create new content that is similar in style or content to the original dataset."),(0,r.yg)("h2",{id:"foundation-model"},"Foundation model"),(0,r.yg)("p",null,"A particular adaptive model that has been trained on a large amount of data and starts to derive relationships between words and concepts. Foundation models are fine-tuned to become more specific and adapt to the related domain more efficiently."),(0,r.yg)("h2",{id:"fine-tuning"},"Fine-tuning"),(0,r.yg)("p",null,"Fine-tuning refers to the process of taking a pre-trained language model and further training it on a specific task or domain to improve its performance on that task. It is an important technique used to adapt LLMs to specific tasks and domains. "),(0,r.yg)("h2",{id:"lora-low-rank-adaptation"},"LoRA (Low-Rank Adaptation)"),(0,r.yg)("p",null,"Low-Rank Adapation (LoRa) involves modifying the pre-trained model by adjusting its weights and biases to better fit the new task. This adaptation is done in a way that preserves the pre-trained weights from the original dataset while also adjusting for the new task's specific requirements. This method of training or fine-turning models consumes less memory. By using low rank adaptation, the pre-trained model can be quickly adapted to new tasks, without requiring a large amount of new training data."),(0,r.yg)("h2",{id:"quantization"},"Quantization"),(0,r.yg)("p",null,"Quantization is a technique used to reduce the size and memory requirements of a large language model without sacrificing its accuracy. This is done by converting the floating-point numbers used to represent the model's parameters to lower-precision numbers, such as half-floats or bfloat16. Quantization can be used to make language models more accessible to users with limited computing resources. "),(0,r.yg)("h2",{id:"8-bit-model-training-with-a-low-memory-footprint"},"8-bit model training with a low memory footprint"),(0,r.yg)("p",null,"8-bit model training with a low memory footprint refers to a fine-tuning technique that reduces the memory requirements for training neural networks by using 8-bit integers instead of 32-bit floating-point numbers. This approach can significantly reduce the amount of memory needed to store the model's parameters and can make it possible to train larger models on hardware with limited memory capacity."))}m.isMDXComponent=!0}}]);