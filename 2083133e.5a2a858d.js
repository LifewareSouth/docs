(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{105:function(e,a,r){"use strict";r.d(a,"a",(function(){return u})),r.d(a,"b",(function(){return m}));var n=r(0),l=r.n(n);function c(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function t(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?t(Object(r),!0).forEach((function(a){c(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function o(e,a){if(null==e)return{};var r,n,l=function(e,a){if(null==e)return{};var r,n,l={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],a.indexOf(r)>=0||(l[r]=e[r]);return l}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var b=l.a.createContext({}),s=function(e){var a=l.a.useContext(b),r=a;return e&&(r="function"==typeof e?e(a):i(i({},a),e)),r},u=function(e){var a=s(e.components);return l.a.createElement(b.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return l.a.createElement(l.a.Fragment,{},a)}},p=l.a.forwardRef((function(e,a){var r=e.components,n=e.mdxType,c=e.originalType,t=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),u=s(r),p=n,m=u["".concat(t,".").concat(p)]||u[p]||d[p]||c;return r?l.a.createElement(m,i(i({ref:a},b),{},{components:r})):l.a.createElement(m,i({ref:a},b))}));function m(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var c=r.length,t=new Array(c);t[0]=p;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,t[1]=i;for(var b=2;b<c;b++)t[b]=r[b];return l.a.createElement.apply(null,t)}return l.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},152:function(e,a,r){"use strict";r.r(a),a.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAADFCAMAAABpaYznAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGAUExURebm5tra2ldXVwAAAAQEBCAgICwsLEBAQBAQEFRUVIeHh6+vr9PT0/v7+////9fX17Ozs4uLi1hYWBgYGDw8PI+Pj8/Pz5eXl0RERBwcHHx8fNvb2+Pj4ygoKEZGRp+fn/j4+Do6OpOTk+zs7AgICHBwcO/v77+/v+vr6/f394CAgN/f34ODg2xsbCIiIpaWlqqqqm5ubjIyMjMzM6ysrOnp6QwMDHR0dOfn58fHx1FRUcTExNDQ0HZ2dnp6etTU1FBQUGhoaNzc3ODg4IaGhi4uLoiIiOHh4TAwMCQkJLe3t/Pz84SEhBEREWBgYDQ0NExMTLu7uzg4OMvLywoKCpWVlQ8PD8HBwXh4eKOjo1xcXE5OTmRkZBQUFEhISKurq8PDw5ubm5qamszMzDExMX19fQ4ODjU1NaenpysrK+3t7QUFBc7OzlZWVvDw8DY2NtbW1tnZ2eXl5SEhIQcHB0FBQR0dHaioqEpKSry8vEtLSzc3N/X19VVVVdHR0QAAAD+cdFYAAACAdFJOU/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AOAVLZwAAAAlwSFlzAAAOwwAADsMBx2+oZAAABhlJREFUeF7tXDuOpTAQHGnzF3MChwiJmAACMgKuAOfg7mvT7bbbf2b9CFau2ZEeD9vl7qq2+azmR4hFfO134RA/orsu+e9rvww/Aj+8AsX25yU0tlpQbF3LZAU0tlpQbM2TNdB0q4XGVgvvszVP1kDTrRYaWy28z9Y8WQNNt1pobLXwPlvzZA003WqhsdXC+2zNkzXwO7a+77tx3Ho8LMZT3bZrHZYPYdnXa8NTBXgU27ieyMKwHB02yKGcbVutmFyItSirpWzdgeNGMRQEWMY2HgLHTECsIzaPooht8rjEsu+nP4M14xjFlvHkxUZd1mskjbbxmpiaYsYzYWRj2yzBxDAFzDDOgzWfI2WXLNuOo6h5R/O0zYbvTGQzw3ZRgZ1TUpNtMi0TwyV1m7UoS76eeqrHJSpeMrYLu3/OotrdKOsxuhTbjH0/6SQabBN2iNEl2Dat/IRfFICyES70BBvKINwVqZ+GfZEzkRV+eHKOOMUlmI44G4og+Hgjr2a1AfAwNvTmgscMii3oSSzqnY01B3eck6k0YpsDj23EYtMC2GkcTaU7OFkzTGZA7hhboMcAX4WxWzrhTIUvXYRthQ4rHkp0wSQa2OFhIVi9ERHdoPmORxI6PQlYdJhyb00Ix4ahGYdQHaVg0o6lOuAhIci23W0tV43whYI44yk14+B03eCCbOh+akuryg5e1yb3YJIBPSwpboTYMDQjMhb0YpShBZHDrCC4xjoLWIgNhjIGRuszFSLlcOJpPUOnxBWb60loSJr396HTEeP3QOFjcHiECMSGliDVwM6uBLQdcZjlEY750AE28AjlDYb19tNYTdCaCbnmRRBgA8NRIp1DDasoGASex+nQ4Q1fN1REuwlGNeproJo+tHI4DsuJH5szJ6hTL7Q4G+UO9GY9fTaQjRqBQZ26kYhUnDVPaMGE89lAXf0VhMCzfyO+/+hUBjTw2XgwMEHX/hL390HowkTh8OiGzwZttLiQV98k0URaU4NDe09VbMyTTurA/x4bv+/hoMbQxjalFxtkm5YEyKurm7kqDsDpaxvMY4PYnPm5nsTtKwyaGkzJ2tJ9tu5u4uTesQnufzFopcC2LhvTDdh0ldBSbxVp7noow5bSjdxAvvZvwl1gy5JMQjSUe1BaQcgb7u5K2QPx3CWO0o9AGhdUgFOTGUOE4DgszQbx62wnvR5GZuXi+xvXFiz6CLxrZg9wNrSc3T3QEwxYStnFk88GuykZ67Fwz3ZTvODQxn2cSj0Ybu5szfN1Q5vQtZOpuCJQ7cSugnhs7pZWEtw5dfqZImUO1i2+wAbYcHg8KvHJ7QRHb6xtPnSAzU0lChkHpuH+TEPhnO2dO8wGNWAynlu90Ajqo9nkISPM/2E2dBMpsGWMAvNXwZiHK5BXtgFIKDbHk1pgc0uF9DFAOzUlY3dQzYQKCMWmVziThrQv79tKlW5TyeGbxTCbXkCMxJH7J8Sw3h3MzSzeOnP7S4TZcLOwWqcu6RDW8yecrb3Z3AjqRhuN/XQm48zdMoTfGxGJTV+PWGeS15CfxYpDF6gXWpRNC2Xr3EUrYbFH0A72Q4uy6dSffA0PxrezR/e/eWJIy6PzELWz3zQoiMHprfvhIUOcTa8gwi2a8bgf9Mozy+69eet1tn3RJBRbwJMK9NguPBkeM6LTfdwpAuKxSaforrlXTwR9hRZ7eZRiM7eEQxGdecEUsOONJJt5s1LwprJfdSrSb1YiuimY+5kl/cKjN0/u7VXFQTo2CaL7iEQz8y6LrSousmw9iSH5hjngtXGyazCZ8iybZc0b+2ReZEpjjDNfXmL+ABSw/dm0sQni3I8j8Jr2yHi3hE0mi/yWgHDe6ASg2BKeJOTfrue5SmNT6JNv2Mv+q0I5m8TlbgAAaVVskMMjNolxHpg5zmEqyKBGqW4MWzd219yNdi0U4Wls/4bGVgvvsz325K/RdKuFplstNLZaUGzNkzXQdKuFxlYL77M1T9ZA060WGlstvM/WPFkDTbdaaGy18D5b82QNNN1q4f9new9vs6k/TPkt4F+51BCKTf586x+HZpM/X/ng4EefU1Op/mE5JQX9LuIvDp674yPZUEQAAAAASUVORK5CYII="},153:function(e,a,r){"use strict";r.r(a),a.default="data:image/png;base64,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"},154:function(e,a,r){"use strict";r.r(a),a.default=r.p+"assets/images/1.2-e4703c0612e8c83dd3f8378c7f5ff019.png"},155:function(e,a,r){"use strict";r.r(a),a.default=r.p+"assets/images/2.1-252db6deb21081cde54aed0ceedac711.jpg"},156:function(e,a,r){"use strict";r.r(a),a.default=r.p+"assets/images/2.2-a448b91e93b6df7b7add139598d5e7af.png"},157:function(e,a,r){"use strict";r.r(a),a.default=r.p+"assets/images/2.3-2cd2dc47a45de77d4d3f1bc884628391.jpg"},158:function(e,a,r){"use strict";r.r(a),a.default=r.p+"assets/images/2.5-5973743c700616d1f2ad63cfe12cd516.jpg"},159:function(e,a,r){"use strict";r.r(a),a.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAACSCAMAAAB7eXjFAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJUExURebm5v+lAAAAALODFUAAAAADdFJOU///ANfKDUEAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACQSURBVHhe7c5BCoAwEATB9f+f9pIHdASDSNV9mB4AAPie64B1teHBZJeqTlWnqlPVqepUdao6VZ2qTlWnqlPVqepUdao6VZ2qTlWnqlPVqepUdao6VZ2qTlWnqlPVqepUdao6VZ2qTlWnqlPVqepUdao6VZ2qTlWnqlPVqepUdao6Vd1/qg5YVwAAAADvmLkBCdMBjRedU4sAAAAASUVORK5CYII="},160:function(e,a,r){"use strict";r.r(a),a.default=r.p+"assets/images/2.5.1.7-4a91483071dbeab81d1678bab2e99659.png"},161:function(e,a,r){"use strict";r.r(a),a.default=r.p+"assets/images/2.6-eed549a153302ad14b84a8db1335c74c.jpg"},75:function(e,a,r){"use strict";r.r(a),r.d(a,"frontMatter",(function(){return t})),r.d(a,"metadata",(function(){return i})),r.d(a,"toc",(function(){return o})),r.d(a,"default",(function(){return s}));var n=r(3),l=r(7),c=(r(0),r(105)),t={id:"manual-openeyes",title:"Manual de Usuario OpenEyes\xae"},i={unversionedId:"manual-openeyes",id:"manual-openeyes",isDocsHomePage:!1,title:"Manual de Usuario OpenEyes\xae",description:"Contenido",source:"@site/docs/OpenEyes.md",slug:"/manual-openeyes",permalink:"/docs/docs/manual-openeyes",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/OpenEyes.md",version:"current",sidebar:"someSidebar",previous:{title:"Importar pictogramas a IntegraBoard",permalink:"/docs/docs/importar-pictogramas-a-integraboard"},next:{title:"Configuraci\xf3n m\xf3dem Huawei",permalink:"/docs/docs/modem-huawei"}},o=[{value:"Contenido",id:"contenido",children:[]},{value:"1. Estado inicial del programa",id:"1-estado-inicial-del-programa",children:[]},{value:"2. OpenEyes \u2013 Funciones del men\xfa principal",id:"2-openeyes--funciones-del-men\xfa-principal",children:[{value:"2.1. Letras",id:"21-letras",children:[]},{value:"2.2. Web Browsing",id:"22-web-browsing",children:[]},{value:"2.3. Conversaci\xf3n",id:"23-conversaci\xf3n",children:[]},{value:"2.4. Volver a calibrar",id:"24-volver-a-calibrar",children:[]},{value:"2.5. Cursor",id:"25-cursor",children:[]},{value:"2.6. Tama\xf1o y posici\xf3n",id:"26-tama\xf1o-y-posici\xf3n",children:[]},{value:"2.7. Minimizar",id:"27-minimizar",children:[]}]}],b={toc:o};function s(e){var a=e.components,t=Object(l.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,t,{components:a,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"contenido"},"Contenido"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("a",{parentName:"li",href:"#1-estado-inicial-del-programa"},"Estado inicial del programa")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("a",{parentName:"li",href:"#2-openeyes--funciones-del-men%C3%BA-principal"},"OpenEyes \u2013 Funciones del men\xfa principal"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#21-letras"},"2.1. Letras"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#211-funciones-de-secci%C3%B3n-letras"},"2.1.1. Funciones de secci\xf3n letras"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"##1-agregar-al-diccionario"},"Agregar al diccionario")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#2-copiar"},"Copiar")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#3-bloc-de-notas"},"Bloc de notas")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#4-communikate"},"Communikate")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#5-hablar"},"Hablar")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#6-suspender"},"Suspender")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#7-men%C3%BA"},"Men\xfa")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#8-cursor"},"Cursor")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#9-lupa"},"Lupa")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#10-acciones-del-cursor"},"Acciones del cursor")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#11-selecci%C3%B3n-m%C3%BAltiple"},"Selecci\xf3n m\xfaltiple")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#12-teclado"},"Teclado")))))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#22-web-browsing"},"2.2. Web Browsing"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#221-funciones-del-men%C3%BA-web-browsing"},"2.2.1 Funciones del men\xfa web browsing"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#1-browser-back"},"Browser back")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#2-inicio"},"Inicio")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#3-browser-forward"},"Browser forward")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#4-look-to-scroll"},"Look to scroll")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#5-browser-home"},"Browser home")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#6-browser-search"},"Browser search")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#7-fin"},"Fin")))))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#23-conversaci%C3%B3n"},"2.3. Conversaci\xf3n")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#24-volver-a-calibrar"},"2.4. Volver a calibrar")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#25-cursor"},"2.5. Cursor"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#251-funciones-del-men%C3%BA-del-cursor"},"2.5.1 Funciones del men\xfa del cursor"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#1-clic-izquierdo"},"Clic izquierdo")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#2-clic-derecho"},"Clic derecho")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#3-doble-clic-izquierdo"},"Doble clic izquierdo")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#4-scroll"},"Scroll")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#5-punto-de-fijaci%C3%B3n"},"Punto de fijaci\xf3n")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#6-clic-y-arrastrar"},"Clic y arrastrar")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#7-lupa"},"Lupa")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#8-cursor-magn%C3%A9tico"},"Cursor magn\xe9tico")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#9-volver"},"Volver")))))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#26-tama%C3%B1o-y-posici%C3%B3n"},"2.6. Tama\xf1o y posici\xf3n"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#261-funcionalidades-tama%C3%B1o-y-posici%C3%B3n"},"2.6.1 Funcionalidades tama\xf1o y posici\xf3n"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#1-saltar-izquierda"},"Saltar izquierda")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#2-saltar-derecha"},"Saltar derecha")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#3-menos-tenue"},"Menos tenue")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#4-m%C3%A1s-tenue"},"M\xe1s tenue")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#5-volver"},"Volver")))))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"#27-minimizar"},"2.7. Minimizar"))))),Object(c.b)("h2",{id:"1-estado-inicial-del-programa"},"1. Estado inicial del programa"),Object(c.b)("p",null,"Cuando la aplicaci\xf3n se encuentra en uso se encontrar\xe1 con el siguiente \xedcono en la parte derecha de su pantalla."),Object(c.b)("div",{style:{textAlign:"center"}},Object(c.b)("p",null,Object(c.b)("img",{alt:"screenshot",src:r(152).default}))),"Al fijar su mirada por un instante se muestra que se empieza a generar un c\xedrculo, como se muestra a continuaci\xf3n.",Object(c.b)("div",{style:{textAlign:"center"}},Object(c.b)("p",null,Object(c.b)("img",{alt:"screenshot",src:r(153).default}))),Object(c.b)("p",null,"Cuando se completa el circulo se ejecuta la acci\xf3n del bot\xf3n seleccionado, en este caso es la apertura del men\xfa principal como se muestra a continuaci\xf3n."),Object(c.b)("div",{style:{textAlign:"center"}},Object(c.b)("p",null,Object(c.b)("img",{alt:"screenshot",src:r(154).default})),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Imagen 1: men\xfa principal OpenEyes."))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Para activar cualquier bot\xf3n del programa OpenEyes debe esperar a que el circulo se complete para ejecutar la acci\xf3n.")),Object(c.b)("h2",{id:"2-openeyes--funciones-del-men\xfa-principal"},"2. OpenEyes \u2013 Funciones del men\xfa principal"),Object(c.b)("p",null,"Cuando se fija la mirada sobre los iconos del men\xfa principal, aparecer\xe1 los nombres de cada secci\xf3n del men\xfa. Las siguientes secciones esta descrito las acciones de cada secci\xf3n del men\xfa principal, est\xe1 relacionado con la imagen 1."),Object(c.b)("h3",{id:"21-letras"},"2.1. Letras"),Object(c.b)("p",null,"Una vez que seleccione el \xedcono de letras con la mirada se encontrara con lo siguiente:"),Object(c.b)("div",{style:{textAlign:"center"}},Object(c.b)("p",null,Object(c.b)("img",{alt:"screenshot",src:r(155).default}))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Imagen 2: funciones generales de letras.")),Object(c.b)("h4",{id:"211-funciones-de-secci\xf3n-letras"},"2.1.1 Funciones de secci\xf3n letras"),Object(c.b)("p",null,"La siguiente numeraci\xf3n est\xe1 relacionada con lo mostrado en la imagen 2."),Object(c.b)("h5",{id:"1-agregar-al-diccionario"},"1. Agregar al diccionario"),Object(c.b)("p",null,"Almacena la palabra que este escrita en el block de notas para posteriores usos."),Object(c.b)("h5",{id:"2-copiar"},"2. Copiar"),Object(c.b)("p",null,"Permite copiar lo que se encuentre escrito en block de notas y as\xed poder pegarlo en otra secci\xf3n."),Object(c.b)("h5",{id:"3-bloc-de-notas"},"3. Bloc de notas"),Object(c.b)("p",null,"Cumple la funci\xf3n de registrar lo seleccionado en la aplicaci\xf3n OpenEyes."),Object(c.b)("h5",{id:"4-communikate"},"4. Communikate"),Object(c.b)("p",null,"Abre una nueva ventana con palabras o frases registradas, estas palabras est\xe1n asociadas a im\xe1genes que permiten una mejor interacci\xf3n."),Object(c.b)("h5",{id:"5-hablar"},"5. Hablar"),Object(c.b)("p",null,"Todo lo que este escrito en la secci\xf3n de bloc de notas se podr\xe1 escuchar por audio."),Object(c.b)("h5",{id:"6-suspender"},"6. Suspender"),Object(c.b)("p",null,"Permite congelar o pausar la aplicaci\xf3n para observar lo mostrado por pantalla sin activar ninguna tecla del programa OpenEyes."),Object(c.b)("h5",{id:"7-men\xfa"},"7. Men\xfa"),Object(c.b)("p",null,"Permite regresar al men\xfa principal."),Object(c.b)("h5",{id:"8-cursor"},"8. Cursor"),Object(c.b)("p",null,"Permite llegar directamente al men\xfa del cursor."),Object(c.b)("h5",{id:"9-lupa"},"9. Lupa"),Object(c.b)("p",null,"Permite agrandar parte de la pantalla, para activar esta funci\xf3n se debe mirar el \xedcono de lupa hasta que quede seleccionado (cuando este seleccionado quedara marcado de color azul) y posteriormente se debe ir a la funci\xf3n de clic izquierdo hasta que se seleccione, finalmente debe dirigir la mirada hacia la zona donde quiere aplicar la lupa y esperar a que se ejecute la acci\xf3n."),Object(c.b)("h5",{id:"10-acciones-del-cursor"},"10. Acciones del cursor"),Object(c.b)("p",null,"Cuenta con la funci\xf3n de clic izquierdo del cursor y doble clic izquierdo del cursor."),Object(c.b)("h5",{id:"11-selecci\xf3n-m\xfaltiple"},"11. Selecci\xf3n m\xfaltiple"),Object(c.b)("p",null,"Permite la escritura r\xe1pida, cuando se activa este bot\xf3n debe mirar la primera letra de la palabra que desea escribir, esta se quedara marcada, luego debe mirar el resto de la palabra a excepci\xf3n de la \xfaltima letra sin la necesidad de esperar el tiempo de activaci\xf3n para que se escriba y finalmente mirar la \xfaltima letra hasta que se complete el tiempo de activaci\xf3n, cuando se activa la letra seleccionada se escribe la palabra que desea expresar en el bloc de notas."),Object(c.b)("p",null,"Por ejemplo, si deseo escribir ",'"',"HOLA",'"',", activo el bot\xf3n de selecci\xf3n m\xfaltiple, miro la letra ",'"',"H",'"'," hasta que se escriba en el bloc de notas, luego miro las letras ",'"',"O",'"'," ",'"',"L",'"'," pero sin activar la acci\xf3n de escribir, finalmente miro la letra ",'"',"A",'"'," hasta que el circulo este completo (se active la acci\xf3n de escribir) y se debe escribir la palabra en el bloc de notas."),Object(c.b)("h5",{id:"12-teclado"},"12. Teclado"),Object(c.b)("p",null,"Representa las acciones de un teclado de computador."),Object(c.b)("h3",{id:"22-web-browsing"},"2.2. Web Browsing"),Object(c.b)("p",null,"Cuando se activa la secci\xf3n de web browsing se muestra el siguiente men\xfa."),Object(c.b)("div",{style:{textAlign:"center"}},Object(c.b)("p",null,Object(c.b)("img",{alt:"screenshot",src:r(156).default})),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Imagen 3: men\xfa de web browsing."))),Object(c.b)("h4",{id:"221-funciones-del-men\xfa-web-browsing"},"2.2.1 Funciones del men\xfa web browsing"),Object(c.b)("p",null,"Se debe mencionar que las funciones que no se encuentran numeradas en la imagen 3 se debe a que existe su explicaci\xf3n en otra secci\xf3n del documento."),Object(c.b)("h5",{id:"1-browser-back"},"1. Browser back"),Object(c.b)("p",null,"Al accionar este bot\xf3n se permite volver a la p\xe1gina anterior."),Object(c.b)("h5",{id:"2-inicio"},"2. Inicio"),Object(c.b)("p",null,"Al accionar este bot\xf3n permite subir hasta el comienzo de la p\xe1gina."),Object(c.b)("h5",{id:"3-browser-forward"},"3. Browser forward"),Object(c.b)("p",null,"Al accionar este bot\xf3n se permite adelantar a la pagina siguiente si es que existe alguna visitada."),Object(c.b)("h5",{id:"4-look-to-scroll"},"4. Look to scroll"),Object(c.b)("p",null,"Al accionar este bot\xf3n ocurre lo explicado en men\xfa del cursor, bot\xf3n 4."),Object(c.b)("h5",{id:"5-browser-home"},"5. Browser home"),Object(c.b)("p",null,"Al accionar este bot\xf3n la pagina del navegador se redirige a la pagina principal."),Object(c.b)("h5",{id:"6-browser-search"},"6. Browser search"),Object(c.b)("p",null,"Al accionar este bot\xf3n se acciona la barra del buscador del navegador."),Object(c.b)("h5",{id:"7-fin"},"7. Fin"),Object(c.b)("p",null,"Al accionar este bot\xf3n la p\xe1gina se mover\xe1 al final del contenido."),Object(c.b)("h3",{id:"23-conversaci\xf3n"},"2.3. Conversaci\xf3n"),Object(c.b)("p",null,"Cuando se activa la secci\xf3n de conversaci\xf3n del men\xfa principal se muestra la siguiente imagen que ocupa todo el espacio de la pantalla."),Object(c.b)("div",{style:{textAlign:"center"}},Object(c.b)("p",null,Object(c.b)("img",{alt:"screenshot",src:r(157).default})),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Imagen 4: teclado de conversaci\xf3n."))),Object(c.b)("p",null,"Cuenta con la mayor\xeda de las funciones explicadas en la secci\xf3n de letras. Un cambio que se debe mencionar es que aparece un bot\xf3n con una nueva funci\xf3n, la imagen marca el bot\xf3n volver (marcado como 1 en la imagen 4) que permite volver al men\xfa principal."),Object(c.b)("h3",{id:"24-volver-a-calibrar"},"2.4. Volver a calibrar"),Object(c.b)("p",null,"Al activar el bot\xf3n de calibraci\xf3n se abre el programa de ",'"',"tobii experience",'"'," que permite hacer una prueba de calibraci\xf3n y ajustar el punto de fijaci\xf3n de la mira."),Object(c.b)("h3",{id:"25-cursor"},"2.5. Cursor"),Object(c.b)("p",null,"Al activar cursor, aparece el siguiente men\xfa que nos permite representar algunas de las acciones que se pueden realizar con el cursor."),Object(c.b)("div",{style:{textAlign:"center"}},Object(c.b)("p",null,Object(c.b)("img",{alt:"screenshot",src:r(158).default})),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Imagen 5: men\xfa del cursor."))),Object(c.b)("h4",{id:"251-funciones-del-men\xfa-del-cursor"},"2.5.1 Funciones del men\xfa del cursor"),Object(c.b)("h5",{id:"1-clic-izquierdo"},"1. Clic izquierdo"),Object(c.b)("p",null,"Simula el clic izquierdo del cursor, para activar esta funci\xf3n debe mirar el \xedcono, esperar a que se complete el circulo y se accione el bot\xf3n, luego mirar su objetivo que desea chiclear y esperar hasta que se complete el circulo nuevamente para realizar la acci\xf3n del clic izquierdo del cursor."),Object(c.b)("h5",{id:"2-clic-derecho"},"2. Clic derecho"),Object(c.b)("p",null,"Simula el clic derecho del cursor. Se activa de la misma manera que ",'"',"clic izquierdo",'"',"."),Object(c.b)("h5",{id:"3-doble-clic-izquierdo"},"3. Doble clic izquierdo"),Object(c.b)("p",null,"Simula el doble clic derecho del cursor. Se activa de la misma manera que ",'"',"clic izquierdo",'"',"."),Object(c.b)("h5",{id:"4-scroll"},"4. Scroll"),Object(c.b)("p",null,"Simula el accionar de mover la pantalla (hacia arriba o hacia abajo) con la rueda del cursor, para activar debe mirar el \xedcono hasta que se acci\xf3n el bot\xf3n y luego debe mirar en el lugar donde quiere activar la funci\xf3n (preferentemente en el centro de la pantalla), esto marcara un cuadrado en su pantalla como se muestra en la siguiente imagen."),Object(c.b)("div",{style:{textAlign:"center"}},Object(c.b)("p",null,Object(c.b)("img",{alt:"screenshot",src:r(159).default})),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Imagen 6: muestra de resultado al accionar ",'"',"scroll",'"',"."))),Object(c.b)("p",null,"Finalmente, cuando aparezca el cuadrado que se muestra en la imagen, ya puede comenzar a utilizar la funci\xf3n de la rueda del cursor, mirando por sobre el cuadrado se comenzara a mover hacia arriba o mirando por debajo del cuadrado se comenzara a mover hacia abajo."),Object(c.b)("h5",{id:"5-punto-de-fijaci\xf3n"},"5. Punto de fijaci\xf3n"),Object(c.b)("p",null,"Ayuda a la fijaci\xf3n de la mirada, se recomienda modificar esta funci\xf3n solo si se encuentra activada la funci\xf3n de cursor magn\xe9tico, existen las siguientes ayudas de fijaci\xf3n:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Screen centred:")," ayuda a fijar la mirada en el centro de la pantalla."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Windows:")," ayuda a fijar la mirada en ventanas como por ejemplo las del navegador."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Windows regi\xf3n:")," ayuda a fijar la mirada en un sector de la ventana."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Custom regi\xf3n:")," restringe la zona de fijaci\xf3n."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Screen at point:")," ayuda a fijar la mirada en las esquinas de los elementos.")),Object(c.b)("p",null,"se recomienda utilizar la opci\xf3n de Screen centred junto a la activaci\xf3n de cursor magn\xe9tico."),Object(c.b)("h5",{id:"6-clic-y-arrastrar"},"6. Clic y arrastrar"),Object(c.b)("p",null,"Cumple la funci\xf3n de seleccionar un espacio de la pantalla o arrastrar un elemento de la pantalla, para utilizar esta funci\xf3n se debe:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Seleccionar un espacio en la pantalla:")," al accionar el bot\xf3n de clic y arrastrar, se debe ir al comienzo de la frase que desea seleccionar, esperar hasta el accionar de seleccionar, luego ir al final de la frase y esperar hasta el accionar de seleccionar. Cuando termina el ultimo accionar se realiza la acci\xf3n de seleccionar."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Funci\xf3n de arrastrar un elemento:")," al accionar el bot\xf3n de clic y arrastrar, se debe ir y fijar la mira en el elemento que se desea mover hasta que se realice el primer accionar, luego se debe fijar la mira en el lugar donde uno quiere que se ubique el elemento hasta que se produzca el segundo accionar, cuando se ejecuta el segundo accionar se produce el movimiento del elemento.")),Object(c.b)("h5",{id:"7-lupa"},"7. Lupa"),Object(c.b)("p",null,"Agranda una parte seleccionada hasta que se realice otra acci\xf3n, para utilizar esta funci\xf3n se debe:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Se debe colocar el cursor sobre la imagen de la lupa hasta activarse, cuando este marcado con celeste como muestra la imagen:")),Object(c.b)("div",{style:{textAlign:"center"}},Object(c.b)("p",null,Object(c.b)("img",{alt:"screenshot",src:r(160).default})),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Imagen 7: ilustraci\xf3n de lupa activada."))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Se debe activar la funci\xf3n de clic izquierdo del men\xfa del rat\xf3n."),Object(c.b)("li",{parentName:"ul"},"Finalmente hacer la acci\xf3n del clic sobre el lugar donde se desea activar la funci\xf3n de la lupa.")),Object(c.b)("h5",{id:"8-cursor-magn\xe9tico"},"8. Cursor magn\xe9tico"),Object(c.b)("p",null,"La funci\xf3n del cursor magn\xe9tico puede ayudar a fijar la mirada en algunos lugares y restringe un poco la movilidad, para activar su funci\xf3n se recomienda mezclar con punto de fijaci\xf3n:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Para su uso se debe dejar activada la funci\xf3n de cursor magn\xe9tico, debe quedar marcado de un color celeste como sucede con la activaci\xf3n de la acci\xf3n lupa, luego ir ajustando con la funci\xf3n de fijaci\xf3n seg\xfan sea la necesidad.")),Object(c.b)("h5",{id:"9-volver"},"9. Volver"),Object(c.b)("p",null,"Permite volver al men\xfa principal."),Object(c.b)("h3",{id:"26-tama\xf1o-y-posici\xf3n"},"2.6. Tama\xf1o y posici\xf3n"),Object(c.b)("p",null,"Esta secci\xf3n nos permite configurar el pictograma a fondo, pudiendo cargar im\xe1genes personalizadas o asignar textos para su simulaci\xf3n de voz."),Object(c.b)("div",{style:{textAlign:"center"}},Object(c.b)("p",null,Object(c.b)("img",{alt:"screenshot",src:r(161).default})),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Imagen 8: men\xfa de tama\xf1o y posici\xf3n."))),Object(c.b)("h4",{id:"261-funcionalidades-tama\xf1o-y-posici\xf3n"},"2.6.1 Funcionalidades tama\xf1o y posici\xf3n"),Object(c.b)("h5",{id:"1-saltar-izquierda"},"1. Saltar izquierda"),Object(c.b)("p",null,"Al accionar este bot\xf3n, el programa se mover\xe1 hacia la izquierda si es que se encuentra a la derecha."),Object(c.b)("h5",{id:"2-saltar-derecha"},"2. Saltar derecha"),Object(c.b)("p",null,"Al accionar este bot\xf3n, el programa se mover\xe1 hacia la derecha si es que se encuentra a la izquierda."),Object(c.b)("h5",{id:"3-menos-tenue"},"3. Menos tenue"),Object(c.b)("p",null,"Cada vez que se acciona este bot\xf3n el fondo del programa se volver\xe1 m\xe1s claro."),Object(c.b)("h5",{id:"4-m\xe1s-tenue"},"4. M\xe1s tenue"),Object(c.b)("p",null,"Cada vez que se acciona este bot\xf3n el fondo del programa se volver\xe1 m\xe1s oscuro."),Object(c.b)("h5",{id:"5-volver"},"5. Volver"),Object(c.b)("p",null,"Permite volver al men\xfa principal."),Object(c.b)("h3",{id:"27-minimizar"},"2.7. Minimizar"),Object(c.b)("p",null,"Cuando se activa minimizar, la aplicaci\xf3n vuelve a su estado de inicio, mostrando el \xedcono que aparece al abrir el programa."))}s.isMDXComponent=!0}}]);