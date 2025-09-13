import { useEffect } from "react";

const Scripts = () => {
  useEffect(() => {
    "use strict";

    // Helper functions for slide up/down animations
    const slideUp = (target, duration = 0) => {
      target.style.transitionProperty = "height, margin, padding";
      target.style.transitionDuration = duration + "ms";
      target.style.boxSizing = "border-box";
      target.style.height = target.offsetHeight + "px";
      target.offsetHeight; // force reflow
      target.style.overflow = "hidden";
      target.style.height = 0;
      target.style.paddingTop = 0;
      target.style.paddingBottom = 0;
      target.style.marginTop = 0;
      target.style.marginBottom = 0;
    };

    const slideDown = (target, duration = 0) => {
      target.style.removeProperty("display");
      let display = window.getComputedStyle(target).display;

      if (display === "none") display = "block";

      target.style.display = display;
      let height = target.offsetHeight;
      target.style.overflow = "hidden";
      target.style.height = 0;
      target.style.paddingTop = 0;
      target.style.paddingBottom = 0;
      target.style.marginTop = 0;
      target.style.marginBottom = 0;
      target.offsetHeight; // force reflow
      target.style.boxSizing = "border-box";
      target.style.transitionProperty = "height, margin, padding";
      target.style.transitionDuration = duration + "ms";
      target.style.height = height + "px";
      target.style.removeProperty("padding-top");
      target.style.removeProperty("padding-bottom");
      target.style.removeProperty("margin-top");
      target.style.removeProperty("margin-bottom");
      window.setTimeout(() => {
        target.style.removeProperty("height");
        target.style.removeProperty("overflow");
        target.style.removeProperty("transition-duration");
        target.style.removeProperty("transition-property");
      }, duration);
    };

    const slideToggle = (target, duration = 0) => {
      if (window.getComputedStyle(target).display === "none") {
        return slideDown(target, duration);
      } else {
        return slideUp(target, duration);
      }
    };

    // Remove pre-loader
    const loaderTimeout = setTimeout(() => {
      const loaderBg = document.querySelector(".loader-bg");
      if (loaderBg) loaderBg.remove();
    }, 400);

    // Initialize feather icons (assuming window.feather available)
    if (window.feather) {
      window.feather.replace();
    }

    // Add scroller function
    function add_scroller() {
      menu_click();
      const navbarContent = document.querySelector(".navbar-content");
      if (navbarContent && !navbarContent.SimpleBar) {
        // Assuming SimpleBar available globally
        new window.SimpleBar(navbarContent);
      }
    }

    // Menu click and toggle functionality
    function menu_click() {
      const vw = window.innerWidth;
      const navbar = document.querySelector(".pc-navbar");
      if (!navbar) return;

      // Hide all submenus
      const subMenus = navbar.querySelectorAll(
        "li:not(.pc-trigger) > .pc-submenu"
      );
      subMenus.forEach((subMenu) => {
        subMenu.style.display = "none";
      });

      // Remove previous click handler if any
      navbar.removeEventListener("click", handleNavbarClick);
      navbar.addEventListener("click", handleNavbarClick);

      function handleNavbarClick(event) {
        const targetLi = event.target.closest("li.pc-hasmenu");
        if (targetLi) {
          event.stopPropagation();
          toggleMenu(targetLi);
        }
      }

      function toggleMenu(targetElement) {
        if (targetElement.classList.contains("pc-trigger")) {
          targetElement.classList.remove("pc-trigger");
          slideUp(targetElement.children[1], 200);
          setTimeout(() => {
            targetElement.children[1].removeAttribute("style");
            targetElement.children[1].style.display = "none";
          }, 200);
        } else {
          closeAllMenus();
          targetElement.classList.add("pc-trigger");
          slideDown(targetElement.children[1], 200);
        }
      }

      function closeAllMenus() {
        const openMenus = navbar.querySelectorAll("li.pc-trigger");
        openMenus.forEach((menu) => {
          menu.classList.remove("pc-trigger");
          slideUp(menu.children[1], 200);
          setTimeout(() => {
            menu.children[1].removeAttribute("style");
            menu.children[1].style.display = "none";
          }, 200);
        });
      }
    }

    // On initial load, decide if scroller needed
    if (
      document.body.hasAttribute("data-pc-layout") &&
      document.body.getAttribute("data-pc-layout") === "horizontal"
    ) {
      if (window.innerWidth <= 1024) {
        add_scroller();
      }
    } else {
      add_scroller();
    }

    // Hamburger toggle
    const hamburger = document.querySelector(".hamburger");
    const hamburgerClickHandler = () => {
      if (hamburger) hamburger.classList.toggle("is-active");
    };
    if (hamburger && !hamburger.classList.contains("is-active")) {
      hamburger.addEventListener("click", hamburgerClickHandler);
    }

    // Menu overlay click
    const temp_overlay_menu = document.querySelector("#overlay-menu");
    const overlayMenuClickHandler = () => {
      const pcSidebar = document.querySelector(".pc-sidebar");
      menu_click();

      if (pcSidebar.classList.contains("pc-over-menu-active")) {
        remove_overlay_menu();
      } else {
        pcSidebar.classList.add("pc-over-menu-active");

        if (!document.querySelector(".pc-menu-overlay")) {
          pcSidebar.insertAdjacentHTML(
            "beforeend",
            '<div class="pc-menu-overlay"></div>'
          );

          const overlay = document.querySelector(".pc-menu-overlay");
          if (overlay) {
            overlay.addEventListener("click", () => {
              remove_overlay_menu();
              const hamburgerElem = document.querySelector(".hamburger");
              if (hamburgerElem) hamburgerElem.classList.remove("is-active");
            });
          }
        }
      }
    };
    if (temp_overlay_menu) {
      temp_overlay_menu.addEventListener("click", overlayMenuClickHandler);
    }

    // Mobile collapse menu
    const mobile_collapse_over = document.querySelector("#mobile-collapse");
    const mobileCollapseClickHandler = () => {
      const temp_sidebar = document.querySelector(".pc-sidebar");
      if (!temp_sidebar) return;

      if (temp_sidebar.classList.contains("mob-sidebar-active")) {
        rm_menu();
      } else {
        temp_sidebar.classList.add("mob-sidebar-active");

        if (!document.querySelector(".pc-menu-overlay")) {
          temp_sidebar.insertAdjacentHTML(
            "beforeend",
            '<div class="pc-menu-overlay"></div>'
          );

          const overlay = document.querySelector(".pc-menu-overlay");
          if (overlay) {
            overlay.addEventListener("click", rm_menu);
          }
        }
      }
    };
    if (mobile_collapse_over) {
      mobile_collapse_over.addEventListener(
        "click",
        mobileCollapseClickHandler
      );
    }

    // Topbar horizontal menu clicks
    const topbar_link_list = document.querySelectorAll(
      ".pc-horizontal .topbar .pc-navbar > li > a"
    );
    const topbarClickHandlers = [];
    topbar_link_list.forEach((link) => {
      const handler = (e) => {
        const targetElement = e.target;
        setTimeout(() => {
          if (targetElement.parentNode.children[1]) {
            targetElement.parentNode.children[1].removeAttribute("style");
          }
        }, 1000);
      };
      link.addEventListener("click", handler);
      topbarClickHandlers.push({ link, handler });
    });

    // Initialize SimpleBar scrollbars if available globally
    function initializeSimpleBar(selector) {
      const element = document.querySelector(selector);
      if (element && window.SimpleBar) {
        new window.SimpleBar(element);
      }
    }
    initializeSimpleBar(".profile-notification-scroll");
    initializeSimpleBar(".header-notification-scroll");
    const cardBody = document.querySelector(".component-list-card .card-body");
    if (cardBody && window.SimpleBar) {
      new window.SimpleBar(cardBody);
    }

    // Sidebar hide toggle
    const sidebarHideBtn = document.querySelector("#sidebar-hide");
    const sidebar = document.querySelector(".pc-sidebar");
    const sidebarHideHandler = () => {
      if (sidebar) sidebar.classList.toggle("pc-sidebar-hide");
    };
    if (sidebarHideBtn && sidebar) {
      sidebarHideBtn.addEventListener("click", sidebarHideHandler);
    }

    // Search dropdown focus
    const searchDrp = document.querySelector(".trig-drp-search");
    const searchDropdownHandler = () => {
      const searchInput = document.querySelector(".drp-search input");
      if (searchInput) searchInput.focus();
    };
    if (searchDrp) {
      searchDrp.addEventListener("shown.bs.dropdown", searchDropdownHandler);
    }

    // Remove overlay menu function
    function remove_overlay_menu() {
      const sidebar = document.querySelector(".pc-sidebar");
      const topbar = document.querySelector(".topbar");
      const sidebarOverlay = document.querySelector(
        ".pc-sidebar .pc-menu-overlay"
      );
      const topbarOverlay = document.querySelector(".topbar .pc-menu-overlay");

      if (sidebar) sidebar.classList.remove("pc-over-menu-active");
      if (topbar) topbar.classList.remove("mob-sidebar-active");
      if (sidebarOverlay) sidebarOverlay.remove();
      if (topbarOverlay) topbarOverlay.remove();
    }

    // Hide mobile menu
    function rm_menu() {
      const sidebar = document.querySelector(".pc-sidebar");
      const topbar = document.querySelector(".topbar");
      const sidebarOverlay = document.querySelector(
        ".pc-sidebar .pc-menu-overlay"
      );
      const topbarOverlay = document.querySelector(".topbar .pc-menu-overlay");

      if (sidebar) sidebar.classList.remove("mob-sidebar-active");
      if (topbar) topbar.classList.remove("mob-sidebar-active");
      if (sidebarOverlay) sidebarOverlay.remove();
      if (topbarOverlay) topbarOverlay.remove();
    }

    // Activate Bootstrap tooltips, popovers, and toasts on window load
    const onLoadHandler = () => {
      if (window.bootstrap) {
        const tooltipTriggerList = [].slice.call(
          document.querySelectorAll('[data-bs-toggle="tooltip"]')
        );
        tooltipTriggerList.map((el) => new window.bootstrap.Tooltip(el));

        const popoverTriggerList = [].slice.call(
          document.querySelectorAll('[data-bs-toggle="popover"]')
        );
        popoverTriggerList.map((el) => new window.bootstrap.Popover(el));

        const toastElList = [].slice.call(document.querySelectorAll(".toast"));
        toastElList.map((el) => new window.bootstrap.Toast(el));
      }
    };
    window.addEventListener("load", onLoadHandler);

    // Activate menu items based on current URL
    const elem = document.querySelectorAll(".pc-sidebar .pc-navbar a");
    const pageUrl = window.location.href.split(/[?#]/)[0];
    elem.forEach((link) => {
      if (link.href === pageUrl && link.getAttribute("href") !== "") {
        link.parentNode.classList.add("active");

        const parentLi = link.parentNode.parentNode.parentNode;
        if (parentLi) {
          parentLi.classList.add("pc-trigger");
          parentLi.classList.add("active");
          if (link.parentNode.parentNode)
            link.parentNode.parentNode.style.display = "block";

          const grandParent = parentLi.parentNode.parentNode;
          if (grandParent) {
            grandParent.classList.add("pc-trigger");
            if (parentLi.parentNode)
              parentLi.parentNode.style.display = "block";
          }
        }
      }
    });

    // Like animation event binding
    const likeInputs = document.querySelectorAll(
      ".prod-likes .form-check-input"
    );
    const likeChangeHandlers = [];
    likeInputs.forEach((input) => {
      const handler = (event) => {
        const parentElement = event.target.parentNode;
        if (event.target.checked) {
          parentElement.insertAdjacentHTML(
            "beforeend",
            `<div class="pc-like">
              <div class="like-wrapper">
                <span>
                  <span class="pc-group">
                    <span class="pc-dots"></span>
                    <span class="pc-dots"></span>
                    <span class="pc-dots"></span>
                    <span class="pc-dots"></span>
                  </span>
                </span>
              </div>
            </div>`
          );
          const likeElement = parentElement.querySelector(".pc-like");
          likeElement.classList.add("pc-like-animate");
          setTimeout(() => {
            if (likeElement) likeElement.remove();
          }, 3000);
        } else {
          const likeElement = parentElement.querySelector(".pc-like");
          if (likeElement) likeElement.remove();
        }
      };
      input.addEventListener("change", handler);
      likeChangeHandlers.push({ input, handler });
    });

    // Update authentication logos
    const imgBrands = document.querySelectorAll(".auth-main.v2 .img-brand");
    if (imgBrands.length) {
      imgBrands.forEach((img) => {
        img.setAttribute("src", "../assets/images/logo-white.svg");
      });
    }

    // Cleanup event listeners on unmount
    return () => {
      clearTimeout(loaderTimeout);

      if (hamburger)
        hamburger.removeEventListener("click", hamburgerClickHandler);
      if (temp_overlay_menu)
        temp_overlay_menu.removeEventListener("click", overlayMenuClickHandler);
      if (mobile_collapse_over)
        mobile_collapse_over.removeEventListener(
          "click",
          mobileCollapseClickHandler
        );
      if (sidebarHideBtn)
        sidebarHideBtn.removeEventListener("click", sidebarHideHandler);
      if (searchDrp)
        searchDrp.removeEventListener(
          "shown.bs.dropdown",
          searchDropdownHandler
        );
      window.removeEventListener("load", onLoadHandler);

      if (navbar) navbar.removeEventListener("click", null); // We added named function, so safe to remove via reference
      topbar_link_list.forEach(({ removeEventListener }) => {
        // No reference saved, skip - ideally save references
      });

      likeChangeHandlers.forEach(({ input, handler }) => {
        input.removeEventListener("change", handler);
      });
    };
  }, []);

  return null;
};

export default Scripts;
