var e=document.querySelector(".append-row"),l=document.querySelector(".remove-row"),r=document.querySelector(".append-column"),t=document.querySelector(".remove-column"),n=document.querySelector(".field tbody");r.addEventListener("click",function(e){n.querySelectorAll("tr").forEach(function(e){e.children.length>0&&e.children.length<10&&e.prepend(e.lastElementChild.cloneNode(!0))});var l=n.querySelectorAll("tr");10===l[0].children.length&&(r.disabled=!0),l[0].children.length>2&&(t.disabled=!1)}),t.addEventListener("click",function(e){n.querySelectorAll("tr").forEach(function(e){e.children.length>0&&e.children.length>2&&e.lastElementChild.remove()});var l=n.querySelectorAll("tr");2===l[0].children.length&&(t.disabled=!0),l[0].children.length<10&&(r.disabled=!1)}),e.addEventListener("click",function(r){var t=n.querySelectorAll("tr"),d=n.lastElementChild;t.length<10&&n.prepend(d.cloneNode(!0));var c=n.querySelectorAll("tr");10===c.length&&(e.disabled=!0),c.length>2&&(l.disabled=!1)}),l.addEventListener("click",function(r){var t=n.querySelectorAll("tr"),d=n.lastElementChild;t.length>2&&d.remove();var c=n.querySelectorAll("tr");2===c.length&&(l.disabled=!0),c.length<10&&(e.disabled=!1)});
//# sourceMappingURL=index.d4c925af.js.map