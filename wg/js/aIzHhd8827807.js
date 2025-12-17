
      function atomiShowItems({items}) {
      try {
        items.forEach((item) => {
          const hiddenItem = [...document.querySelectorAll(`#${item}`), ...document.querySelectorAll(`.${item}`)];
          console.log("hiddenItem", hiddenItem)
          if (hiddenItem?.length > 0) {
            hiddenItem.forEach(item => item.classList.remove("atomicat-delay"));
          }
        })
      } catch (error) {
        console.log(error);
      }
      }
    
      function runDelayedFunctions(data) {
        try {
          document.querySelectorAll('.atomicat-delay').forEach(el => el.classList.remove('atomicat-delay'));
          if(data?.setDisplayed){
            localStorage.setItem(data?.setDisplayed, true);
          }
          
        } catch (error) {
          console.log(error);
        }
      }
    
      function atomiGetVturbSrc() {
        try {
          var src = "";

          try {
            var pageUrl = new URL(window.location.href);
            src = pageUrl.searchParams.get("src") || "";
            if (src) return location.search != "" ? "&src=" + src : "?src=" + src;
          } catch (e) {}

          try {
            var links = document.querySelectorAll('a[href*="src="]');
            for (var i = 0; i < links.length; i++) {
              try {
                var u = new URL(links[i].href);
                var s = u.searchParams.get("src");
                if (s) return location.search != "" ? "&src=" + s : "?src=" + s;
              } catch (e2) {
                console.log(e2);
              }
            }
          } catch (e1) {}

          return "";
        } catch (error) {
          console.log(error);
        }
      }
    
    (function() {
      try {
        document.addEventListener('DOMContentLoaded', function () {
          document.addEventListener("keydown", function (e) {
            e.ctrlKey && e.preventDefault();
          }),
          (document.onkeydown = function (e) {
            if (123 == e.keyCode) return !1;
          }),
          document.addEventListener("contextmenu", (e) => e.preventDefault());
        });
      } catch (error) {
        console.log(error);
      }
    })();
    (function() {
          try {
              const clickeventList = [{"compKey":"4893000","misc":{"type":"text"}},{"compKey":"af3fe33","misc":{"type":"text"}}];
    
    
              clickeventList.forEach((comp, index) => {
                  const compKey = comp?.compKey;
                  const eleType = comp?.misc?.type;
                  
                  
                  
                  
                  
                  
              });
    
          } catch (error) {
              return error;
          }
      })();
          (function() {
            try {
              var vturbvideoId = "null";
              var compKey = "64ffc14";
              const twr = false;
              var SECONDS_TO_DISPLAY = 919;
              var attempts = 0;
              var elsDisplayed = false;
              var alreadyDisplayedKey = 'alreadyElsDisplayed919';
              var alreadyElsDisplayed = localStorage.getItem(alreadyDisplayedKey);

              var showHiddenElements = function () {
                elsDisplayed = true;
                runDelayedFunctions();
                localStorage.setItem(alreadyDisplayedKey, true);
              };
              function getVideoInstance() {
                if (smartplayer.instances.length > 1) {
                  return smartplayer.instances.find(
                    (instance) => (instance?.options?.id || instance?.analytics?.player?.options?.id) === vturbvideoId
                  );
                }
                return smartplayer.instances[0];
              };
              window.startWatchVideoProgress = function startWatchVideoProgress(reAttempts) {
                if (reAttempts) {
                  attempts = reAttempts;
                }
                
                console.log("vturbvideoId", vturbvideoId);
                if (typeof smartplayer === 'undefined' || !(smartplayer.instances && smartplayer.instances.length)) {
                  if (attempts >= 10) return;
                  attempts += 1;
                  return setTimeout(function () {
                    startWatchVideoProgress();
                  }, 1000);
                }
                console.log(smartplayer.instances);
                var videoInstance = getVideoInstance();
                console.log("videoInstance", videoInstance, vturbvideoId);
                if (videoInstance?.analytics?.player?.options?.id && videoInstance?.analytics?.player?.options?.id !== vturbvideoId && attempts <= 10) {
                  attempts += 1;
                  return setTimeout(function () {
                    startWatchVideoProgress();
                  }, 1000);
                }
                videoInstance.on('timeupdate', () => {
                  if (elsDisplayed || videoInstance.smartAutoPlay) return;
                  console.log("currentTime => " +videoInstance.video.currentTime +" SECONDS_TO_DISPLAY => " +SECONDS_TO_DISPLAY);
                  if (videoInstance.video.currentTime < SECONDS_TO_DISPLAY) return;
                  showHiddenElements();
                });
              };
              if (alreadyElsDisplayed === 'true') {
                setTimeout(function () {
                  showHiddenElements();
                }, 100);
              } else {
                window.startWatchVideoProgress();
              }
            } catch (error) {
              console.log(error);
            }
            
          })();
        