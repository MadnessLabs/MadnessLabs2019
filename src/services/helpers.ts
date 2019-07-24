export class HelperService {
  getParameterByName(name) {
    const match = RegExp("[?&]" + name + "=([^&]*)").exec(
      window.location.search
    );

    return match && decodeURIComponent(match[1].replace(/\+/g, " "));
  }

  async clearCache() {
    return (await caches.keys()).forEach(c => caches.delete(c));
  }

  formatUSD(amount) {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2
    });

    return formatter.format(amount ? amount : 0);
  }

  formatCurrency(amount: any) {
    const formattedAmount = Number(
      parseFloat((amount + "").replace(",", "")).toFixed(2)
    );
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2
    });

    return formatter.format(formattedAmount);
  }

  closestByClass(el, selector) {
    while (el.className !== selector) {
      el = el.parentNode;
      if (!el) {
        return null;
      }
    }

    return el;
  }

  closestByTag(el, selector) {
    while (el.tagName.toLowerCase() !== selector.toLowerCase()) {
      el = el.parentNode;
      if (!el) {
        return null;
      }
    }

    return el;
  }

  addOnceEventListener(element, event, func, capture) {
    function callMeOnce(e) {
      func(e);
      element.removeEventListener(event, callMeOnce, capture);
    }
    element.addEventListener(event, callMeOnce, capture);
  }

  setByPath(obj, path, value) {
    const pList = path.split(".");
    const len = pList.length;
    for (let i = 0; i < len - 1; i++) {
      const elem = pList[i];
      if (!obj[elem]) obj[elem] = {};
      obj = obj[elem];
    }

    obj[pList[len - 1]] = value;
  }

  simulateClick(el) {
    let evt;
    if (document.createEvent) {
      evt = document.createEvent("MouseEvents");
      evt.initMouseEvent(
        "click",
        true,
        true,
        window,
        0,
        0,
        0,
        0,
        0,
        false,
        false,
        false,
        false,
        0,
        null
      );
    }
    evt ? el.dispatchEvent(evt) : el.click && el.click();
  }

  forceBrowserResize() {
    window.dispatchEvent(new Event("resize"));
  }

  getFractionOfHourFromMinutes(minutes: any) {
    return Number(minutes) / 60;
  }

  getMinutesFromHourFraction(fraction: any) {
    return parseFloat(fraction) * 60;
  }

  dateToYearMonthDay(date: any): string {
    const d = new Date(date);
    let month = "" + (d.getMonth() + 1);
    let day = "" + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  shadeColor(col, amt) {
    let usePound = false;
    if (col[0] === "#") {
      col = col.slice(1);
      usePound = true;
    }
    const num = parseInt(col, 16);
    let r = (num >> 16) + amt;
    if (r > 255) {
      r = 255;
    } else if (r < 0) {
      r = 0;
    }
    let b = ((num >> 8) & 0x00ff) + amt;
    if (b > 255) {
      b = 255;
    } else if (b < 0) {
      b = 0;
    }
    let g = (num & 0x0000ff) + amt;
    if (g > 255) {
      g = 255;
    } else if (g < 0) {
      g = 0;
    }

    return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
  }

  mixColor(colorPallet, index) {
    if (colorPallet[index]) {
      return colorPallet[index];
    } else {
      const goesInto = Math.floor(index / colorPallet.length);
      const darkenPercent = goesInto * 30;
      const colorIndex = index - goesInto * colorPallet.length;

      return this.shadeColor(colorPallet[colorIndex], darkenPercent);
    }
  }
}
