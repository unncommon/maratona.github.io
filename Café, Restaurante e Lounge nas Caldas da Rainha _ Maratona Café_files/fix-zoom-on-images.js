function IsRealImageDimensionsBiggerThenImageStyle(n,t){var i,u,r;switch(n){case"web":case"facebook":i=t;break;case"mobile":case"tablet":i=t.children()}return u=i.attr("src"),u?(r=new Image,r.src=u,i.width()>r.width||i.height()>r.height?!0:!1):void 0}