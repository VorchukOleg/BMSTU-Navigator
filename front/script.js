document.addEventListener("DOMContentLoaded", function() {
  const storeMap = document.getElementById("storeMap");
  const stores = storeMap.querySelectorAll(".store");

  stores.forEach(function(store) {
    store.addEventListener("mouseover", function() {
      this.style.fill = "orange";
    });

    store.addEventListener("mouseout", function() {
      this.style.fill = "beige";
    });

    store.addEventListener("click", function(event) {
      const tooltip = document.createElement("div");
      tooltip.classList.add("tooltip");
      tooltip.innerHTML = "Store #" + this.id.substring(5);
      tooltip.style.left = event.clientX + "px";
      tooltip.style.top = event.clientY + "px";
      document.body.appendChild(tooltip);

      window.addEventListener("click", function() {
        tooltip.parentNode.removeChild(tooltip);
      }, {once: true});
    });
  });
});