(this.webpackJsonpmovie_app_2021_re=this.webpackJsonpmovie_app_2021_re||[]).push([[0],{47:function(e,s,t){"use strict";t.r(s);var a=t(3),i=t.n(a),r=t(14),n=t.n(r),c=t(5),o=t.n(c),m=t(15),d=t(16),l=t(17),u=t(20),j=t(19),v=t(18),p=t.n(v),h=t(2),b=t.n(h),g=t(0);b.a.movie={id:b.a.string.isRequired,year:b.a.number.isRequired,title:b.a.string.isRequired,poster:b.a.string.isRequired,summary:b.a.string.isRequired,genres:b.a.arrayOf(b.a.string).isRequired};var O=function(e){e.id;var s=e.year,t=e.title,a=e.poster,i=e.summary,r=e.genres;return Object(g.jsxs)("div",{className:"movie",children:[Object(g.jsx)("img",{src:a,alt:t,title:t}),Object(g.jsxs)("div",{className:"movie_data",children:[Object(g.jsx)("h3",{className:"movie_title",children:t}),Object(g.jsx)("h5",{className:"movie_year",children:s}),Object(g.jsx)("ul",{className:"genres",children:r.map((function(e,s){return Object(g.jsx)("li",{className:"genres_genre",children:e},s)}))}),Object(g.jsxs)("p",{className:"movie_summary",children:[i.slice(0,140),"..."]})]})]})},x=function(e){Object(u.a)(t,e);var s=Object(j.a)(t);function t(){var e;Object(d.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=s.call.apply(s,[this].concat(i))).state={isLoading:!0,movies:[]},e.getMovies=Object(m.a)(o.a.mark((function s(){var t,a;return o.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,p.a.get("https://yts.mx/api/v2/list_movies.json");case 2:t=s.sent,a=t.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return s.stop()}}),s)}))),e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,s=e.isLoading,t=e.movies;return Object(g.jsx)("section",{className:"container",children:s?Object(g.jsx)("div",{className:"loader",children:Object(g.jsx)("span",{className:"loader_text",children:"Loading...."})}):Object(g.jsxs)("div",{className:"movies",children:[" ",t.map((function(e){return Object(g.jsx)(O,{id:e.id,year:e.year,title:e.title,poster:e.medium_cover_image,summary:e.summary,genres:e.genres},e.id)}))]})})}}]),t}(i.a.Component);n.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(x,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.9db95a5d.chunk.js.map