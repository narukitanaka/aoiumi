//スクロールフェードイン
const fadeIn = document.querySelectorAll(".fadeIn");
const options = {
  rootMargin: "0px",
  threshold: 0.6,
};
const observer = new IntersectionObserver(showElement, options);
fadeIn.forEach((fadeIn) => {
  observer.observe(fadeIn);
});
function showElement(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}

//各Swiperイベントの初期化
document.addEventListener("DOMContentLoaded", (event) => {
  //トップMVスライダー
  const swiper = new Swiper(".swiper", {
    loop: true,
    effect: "fade",
    speed: 2000, // ２秒かけながら次の画像へ移動
    autoplay: {
      delay: 4000, // ４秒後に次の画像へ
      disableOnInteraction: false, // ユーザー操作後に自動再生を再開する
    },
    allowTouchMove: false, // マウスでのスワイプを禁止
  });

  // const swiper02 = new Swiper(".swiper02", {
  //   navigation: {
  //     nextEl: ".swiper-next",
  //     prevEl: ".swiper-prev",
  //   },
  //   loop: true,
  //   slidesPerView: 4.5,
  //   spaceBetween: 30,
  //   speed: 600, // ２秒かけながら次の画像へ移動
  //   autoplay: {
  //     delay: 2000, // 2秒後に次の画像へ
  //   },
  //   allowTouchMove: false, // マウスでのスワイプを禁止
  //   centeredSlides: true, // 中央配置のスライドを有効にする
  //   initialSlide: 1,     // 2番目のスライドを最初に表示する
  // });

  // const swiper02 = new Swiper(".swiper02", {
  //   navigation: {
  //     nextEl: ".swiper-next",
  //     prevEl: ".swiper-prev",
  //   },
  //   loop: true,
  //   slidesPerView: 4,
  //   spaceBetween: 30,
  //   speed: 600,
  //   autoplay: {
  //     delay: 2000,
  //   },
  //   allowTouchMove: false,
  //   on: {
  //     slideChange: function () {
  //       // すべてのスライドからカスタムクラスを削除
  //       this.slides.removeClass('enlarged-slide');

  //       // 外側の左から2番目のスライドにカスタムクラスを適用
  //       const targetIndex = this.activeIndex + 1;
  //       if (this.slides[targetIndex]) {
  //         this.slides[targetIndex].classList.add('enlarged-slide');
  //       }
  //     }
  //   },
  //   breakpoints: {
  //     320: {
  //       slidesPerView: 2,
  //       spaceBetween: 30,
  //       speed: 700,
  //     },
  //     // タブレット用の設定
  //     768: {
  //       slidesPerView: 3,
  //       spaceBetween: 20,
  //       speed: 800,
  //     },

  //     1200: {
  //       slidesPerView: 4,
  //       spaceBetween: 20,
  //       speed: 900,
  //       // on: {
  //       //   slideChange: function () {
  //       //     // すべてのスライドからカスタムクラスを削除
  //       //     this.slides.removeClass('enlarged-slide');

  //       //     // 外側の左から2番目のスライドにカスタムクラスを適用
  //       //     const targetIndex = this.activeIndex + 1;
  //       //     if (this.slides[targetIndex]) {
  //       //       this.slides[targetIndex].classList.add('enlarged-slide');
  //       //     }
  //       //   }
  //       // }
  //     },
  //     1920: {
  //       slidesPerView: 4,
  //       spaceBetween: 30,
  //       speed: 1200,
  //     },
  //   }
  // });

  const swiper02 = new Swiper(".swiper02", {
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    speed: 600,
    watchSlidesProgress: true, //これを追加
    autoplay: {
      delay: 2000,
    },
    allowTouchMove: false,
    on: {
      slideChange: function () {
        // すべてのスライドからカスタムクラスを削除
        this.slides.removeClass("enlarged-slide");

        // 外側の左から2番目のスライドにカスタムクラスを適用
        let targetIndex;
        if (this.params.breakpoints[768] && window.innerWidth >= 768) {
          targetIndex = this.activeIndex + 1;
        } else {
          targetIndex = this.activeIndex;
        }
        if (this.slides[targetIndex]) {
          this.slides[targetIndex].classList.add("enlarged-slide");
        }
      },
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 30,
        speed: 700,
      },
      // タブレット用の設定
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
        speed: 800,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
        speed: 700,
        watchSlidesProgress: true, //これを追加
      },
      1920: {
        slidesPerView: 4,
        spaceBetween: 30,
        speed: 600,
      },
    },
  });

  // 初期化時に外側の左から2番目のスライドを拡大
  swiper02.on("init", function () {
    if (this.slides[1]) {
      this.slides[1].classList.add("enlarged-slide");
    }
  });
  // swiper02.init();

  // const swiper02 = new Swiper(".swiper02", {
  //   navigation: {
  //     nextEl: ".swiper-next",
  //     prevEl: ".swiper-prev",
  //   },
  //   loop: true,
  //   speed: 600,
  //   autoplay: {
  //     delay: 2000,
  //   },
  //   allowTouchMove: false,
  //   on: {
  //     slideChange: function () {
  //       // すべてのスライドからカスタムクラスを削除
  //       this.slides.removeClass('enlarged-slide');

  //       // 外側の左から2番目のスライドにカスタムクラスを適用
  //       const targetIndex = this.activeIndex + 1;
  //       if (window.innerWidth > 1040 && this.slides[targetIndex]) {
  //         this.slides[targetIndex].classList.add('enlarged-slide');
  //       }
  //     }
  //   },
  //   breakpoints: {
  //     // タブレット用の設定
  //     768: {
  //       slidesPerView: 3,
  //       spaceBetween: 20,
  //     },
  //     // スマートフォン用の設定
  //     576: {
  //       slidesPerView: 1,
  //       spaceBetween: 30,
  //     }
  //   },
  // });

  // // 初期化時に外側の左から2番目のスライドを拡大
  // swiper02.on('init', function () {
  //   if (window.innerWidth > 1040 && this.slides[1]) {
  //     this.slides[1].classList.add('enlarged-slide');
  //   }
  // });
  // swiper02.init();

  // aboutページswipe

  const sub_swiper = new Swiper(".sub_swiper", {
    loop: true,
    // slidesPerView: 5,
    // spaceBetween: 30,
    // speed: 9000,
    autoplay: {
      delay: 0, // 途切れなくループ
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
        speed: 7000,
      },
      // タブレット用の設定
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
        speed: 8000,
      },

      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
        speed: 9000,
      },
      1920: {
        slidesPerView: 5,
        spaceBetween: 30,
        speed: 12000,
      },
    },
  });

  // collectionページswipe
  const sub_swiper02 = new Swiper(".sub_swiper02", {
    loop: true,
    slidesPerView: 6,
    spaceBetween: 10,
    speed: 9000,
    autoplay: {
      delay: 0, // 途切れなくループ
    },
    aspectRatio: 3 / 5, // スライドの比率を設定
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
        speed: 7000,
      },
      // タブレット用の設定
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
        speed: 8000,
      },

      1200: {
        slidesPerView: 5,
        spaceBetween: 10,
        speed: 9000,
      },
      1920: {
        slidesPerView: 6,
        spaceBetween: 10,
        speed: 12000,
      },
    },
  });
});

// const sub_swiper = new Swiper(".sub_swiper", {
//   loop: true,
//   slidesPerView: 5,
//   spaceBetween: 30,
//   speed: 9000,
//   autoplay: {
//     delay: 0, // 途切れなくループ
//   },
// });

// headerスクロール処理
window.addEventListener("scroll", function () {
  const pTopMv = document.querySelector(".p-top_mv");
  const header = document.querySelector("header");

  if (pTopMv && header) {
    const pTopMvRect = pTopMv.getBoundingClientRect();
    const headerRect = header.getBoundingClientRect();

    if (pTopMvRect.bottom < headerRect.top) {
      // .p-top_mvが#headerを通過した場合
      header.classList.add("glass_effect");
    } else {
      // .p-top_mvが#headerと重なっている場合、または上に戻った場合
      header.classList.remove("glass_effect");
    }
  }
});

// ***********アコーティオン開閉***********

document.addEventListener("DOMContentLoaded", () => {
  setUpAccordion();
});

/**
 * ブラウザの標準機能(Web Animations API)を使ってアコーディオンのアニメーションを制御します
 */
const setUpAccordion = () => {
  const details = document.querySelectorAll(".js-details");
  const RUNNING_VALUE = "running"; // アニメーション実行中のときに付与する予定のカスタムデータ属性の値
  const IS_OPENED_CLASS = "is-opened"; // アイコン操作用のクラス名

  details.forEach((element) => {
    const summary = element.querySelector(".js-summary");
    const content = element.querySelector(".js-answer");

    summary.addEventListener("click", (event) => {
      // デフォルトの挙動を無効化
      event.preventDefault();

      // 連打防止用。アニメーション中だったらクリックイベントを受け付けないでリターンする
      if (element.dataset.animStatus === RUNNING_VALUE) {
        return;
      }

      // detailsのopen属性を判定
      if (element.open) {
        // アコーディオンを閉じるときの処理
        // アイコン操作用クラスを切り替える(クラスを取り除く)
        element.classList.toggle(IS_OPENED_CLASS);

        // アニメーションを実行
        const closingAnim = content.animate(
          closingAnimKeyframes(content),
          animTiming
        );
        // アニメーション実行中用の値を付与
        element.dataset.animStatus = RUNNING_VALUE;

        // アニメーションの完了後に
        closingAnim.onfinish = () => {
          // open属性を取り除く
          element.removeAttribute("open");
          // アニメーション実行中用の値を取り除く
          element.dataset.animStatus = "";
        };
      } else {
        // アコーディオンを開くときの処理
        // open属性を付与
        element.setAttribute("open", "true");

        // アイコン操作用クラスを切り替える(クラスを付与)
        element.classList.toggle(IS_OPENED_CLASS);

        // アニメーションを実行
        const openingAnim = content.animate(
          openingAnimKeyframes(content),
          animTiming
        );
        // アニメーション実行中用の値を入れる
        element.dataset.animStatus = RUNNING_VALUE;

        // アニメーション完了後にアニメーション実行中用の値を取り除く
        openingAnim.onfinish = () => {
          element.dataset.animStatus = "";
        };
      }
    });
  });
};

/**
 * アニメーションの時間とイージング
 */
const animTiming = {
  duration: 400,
  easing: "ease-out",
};

/**
 * アコーディオンを閉じるときのキーフレーム
 */
const closingAnimKeyframes = (content) => [
  {
    height: content.offsetHeight + "px", // height: "auto"だとうまく計算されないため要素の高さを指定する
    opacity: 1,
  },
  {
    height: 0,
    opacity: 0,
  },
];

/**
 * アコーディオンを開くときのキーフレーム
 */
const openingAnimKeyframes = (content) => [
  {
    height: 0,
    opacity: 0,
  },
  {
    height: content.offsetHeight + "px",
    opacity: 1,
  },
];

// ***********ハンバーガーメニュー***********

$(function () {
  $(".ham-trigger").on("click", function () {
    $(this).toggleClass("ham_active");
    $("header").toggleClass("open_active");
    return false;
  });
});
