let allLinks = document.getElementsByTagName("a");
let msg, bgColor;

for (let i = 0; i < allLinks.length; i++) {
  allLinks[i].addEventListener("mouseover", () => {
    let target = allLinks[i].getAttribute("target");

    if (target === "_blank") {
      msg = "New Tab";
      bgColor = "#FF3434";
    } else {
      msg = "Same Tab";
      bgColor = "rgb(0 149 255 / 90%)";
    }
    let wrapper = document.createElement("strong");

    wrapper.id = "link-target-wrapper";

    wrapper.innerText = msg;

    if (bgColor) {
      wrapper.style.backgroundColor = bgColor;
    } else {
      wrapper.style.backgroundColor = bgColor;
    }

    document.body.prepend(wrapper);
  });
  allLinks[i].addEventListener("mouseout", () => {
    let linkTargetWrapper = document.getElementById("link-target-wrapper");
    if (document.body.contains(linkTargetWrapper)) {
      linkTargetWrapper.remove();
    }
  });
}
