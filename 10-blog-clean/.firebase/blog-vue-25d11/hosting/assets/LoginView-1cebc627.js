import{d as u,u as w,o as h,a as m,c as x,b as e,w as i,v as c,e as s,f as v,F as L,_ as p,g as y,h as k,i as F}from"./index-8e0cf509.js";import{u as V}from"./auth.store-f13e0c27.js";import{A as C}from"./AuthLayout-a5f77b01.js";const A=e("h1",{class:"text-3xl"},"Login",-1),B=["onSubmit"],U={class:"form-control w-full"},D=e("label",{class:"label"},[e("span",{class:"label-text"},"Email")],-1),E={class:"form-control w-full"},G=e("label",{class:"label"},[e("span",{class:"label-text"},"Password")],-1),M=e("button",{type:"submit",class:"btn btn-block mt-5 btn-accent"},"Login",-1),S=u({__name:"LoginForm",setup(_){const n=w(),{loginWithEmailAndPassword:l,authForm:o,resetForm:d,loginWithGoogle:b}=V(),f=async()=>{if(await l())return n.replace({name:"blog"})},g=async()=>{if(await b())return n.replace({name:"blog"})};return h(()=>{d()}),(r,t)=>(m(),x(L,null,[A,e("form",{onSubmit:v(f,["prevent"])},[e("div",U,[D,i(e("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>s(o).email=a),type:"email",placeholder:"example@example.com",class:"input input-bordered w-full max-w-xs"},null,512),[[c,s(o).email]])]),e("div",E,[G,i(e("input",{"onUpdate:modelValue":t[1]||(t[1]=a=>s(o).password=a),type:"password",class:"input input-bordered w-full max-w-xs"},null,512),[[c,s(o).password]])]),M,e("button",{onClick:g,type:"button",class:"btn btn-block mt-5 btn-error"}," Login With Google ")],40,B)],64))}}),W=p(S,[["__file","C:/Users/yirsi/Desktop/vue3/10-blog-clean/src/presentation/components/Forms/LoginForm.vue"]]),N=u({__name:"LoginView",setup(_){return(n,l)=>(m(),y(C,null,{default:k(()=>[F(W)]),_:1}))}}),$=p(N,[["__file","C:/Users/yirsi/Desktop/vue3/10-blog-clean/src/presentation/views/auth/LoginView.vue"]]);export{$ as default};
