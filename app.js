const defaultPlaces = [
  {
    id: "moricoro-park",
    name: "愛・地球博記念公園 大芝生広場",
    lat: 35.1739,
    lng: 137.0897,
    type: "outdoor",
    quiet: true,
    score: 94,
    tags: ["愛知", "芝生", "広い", "授乳室"],
    note: "広い芝生と休憩施設があり、平日午前はゆったり過ごしやすい。",
    area: "愛知県長久手市",
    bestTime: "平日午前、休日は開園直後",
    facilities: ["芝生", "授乳室", "おむつ替え", "屋根付き休憩", "駐車場"],
    ground: "芝生中心。雨上がりは湿りやすい場所あり。",
    crowd: "イベント日以外は広さで分散しやすい。",
    caution: "ジブリパーク来園者で周辺が混む日は移動時間に余裕を。",
  },
  {
    id: "toda-river",
    name: "戸田川緑地 こどもランド周辺",
    lat: 35.1004,
    lng: 136.8025,
    type: "outdoor",
    quiet: true,
    score: 90,
    tags: ["愛知", "芝生", "木陰", "駐車場"],
    note: "芝生エリアが多く、ベビーカー移動もしやすい。休日は早めが安心。",
    area: "名古屋市港区",
    bestTime: "午前中、夏場は木陰がある時間",
    facilities: ["芝生", "木陰", "トイレ", "駐車場", "遊具"],
    ground: "芝生と舗装路が近く、敷物を広げやすい。",
    crowd: "休日のこどもランド周辺は混みやすい。",
    caution: "水辺や遊具の近くは目を離さないこと。",
  },
  {
    id: "oasis21",
    name: "オアシス21 銀河の広場",
    lat: 35.1707,
    lng: 136.9086,
    type: "indoor",
    quiet: false,
    score: 76,
    tags: ["愛知", "屋内", "駅近", "雨の日"],
    note: "栄駅近くで雨の日に使いやすい。イベント時は混雑しやすい。",
    area: "名古屋市東区",
    bestTime: "平日昼前、雨の日は早め",
    facilities: ["屋内", "駅近", "エレベーター", "飲食店", "トイレ"],
    ground: "硬い床。はいはいは短時間・マットや着替え前提。",
    crowd: "栄中心部のため常に人通りあり。",
    caution: "通行の邪魔にならない端のスペースを選ぶ。",
  },
  {
    id: "nagoya-port-aquarium",
    name: "名古屋港水族館 休憩スペース周辺",
    lat: 35.0906,
    lng: 136.8782,
    type: "indoor",
    quiet: false,
    score: 79,
    tags: ["愛知", "屋内", "授乳室", "観光"],
    note: "屋内移動が中心で天候に強い。混雑時は休憩スペースを短めに。",
    area: "名古屋市港区",
    bestTime: "平日午前、休日は開館直後",
    facilities: ["屋内", "授乳室", "おむつ替え", "ベビーカー", "飲食"],
    ground: "館内床。休憩スペースで短時間向き。",
    crowd: "イルカショー前後は人が集中しやすい。",
    caution: "展示前の通路ではなく休憩エリアを利用。",
  },
  {
    id: "kariya-oasis",
    name: "刈谷ハイウェイオアシス 芝生広場",
    lat: 35.0486,
    lng: 137.0411,
    type: "outdoor",
    quiet: true,
    score: 87,
    tags: ["愛知", "芝生", "休憩", "駐車場"],
    note: "車移動の休憩に便利。芝生の端を選ぶと落ち着いて過ごしやすい。",
    area: "愛知県刈谷市",
    bestTime: "平日午前、休日は昼前まで",
    facilities: ["芝生", "トイレ", "飲食", "駐車場", "休憩"],
    ground: "芝生と舗装が近く、車移動の休憩に合わせやすい。",
    crowd: "サービスエリア利用者で昼時は混みやすい。",
    caution: "駐車場や通路から離れた芝生側を選ぶ。",
  },
  {
    id: "138-tower-park",
    name: "国営木曽三川公園 138タワーパーク",
    lat: 35.3607,
    lng: 136.8076,
    type: "outdoor",
    quiet: true,
    score: 88,
    tags: ["愛知", "芝生", "広い", "尾張"],
    note: "開放的な芝生があり、混雑を避ければのびのび使いやすい。",
    area: "愛知県一宮市",
    bestTime: "平日午前、春秋の晴天日",
    facilities: ["芝生", "トイレ", "駐車場", "ベビーカー", "展望塔"],
    ground: "芝生が広く、動線から離れた場所を選びやすい。",
    crowd: "花の季節やイベント日は人が増える。",
    caution: "風が強い日は敷物や荷物が飛ばされやすい。",
  },
  {
    id: "toyota-stadium-park",
    name: "豊田スタジアム 千石公園側",
    lat: 35.0843,
    lng: 137.1709,
    type: "outdoor",
    quiet: true,
    score: 82,
    tags: ["愛知", "三河", "芝生", "川沿い"],
    note: "イベントがない日は落ち着きやすい。川沿いなので日差しと風に注意。",
    area: "愛知県豊田市",
    bestTime: "イベントのない平日午前",
    facilities: ["芝生", "川沿い", "トイレ", "駅徒歩", "ベビーカー"],
    ground: "芝生と舗装路が近い。日陰は場所により少なめ。",
    crowd: "試合・イベント開催日は避けたい。",
    caution: "川沿いと階段付近では安全距離を取る。",
  },
  {
    id: "aquatotto",
    name: "河川環境楽園 オアシスパーク",
    lat: 35.3723,
    lng: 136.8122,
    type: "outdoor",
    quiet: false,
    score: 84,
    tags: ["岐阜", "芝生", "水族館", "休憩"],
    note: "愛知からも行きやすい東海定番。休日昼は人が増えやすい。",
    area: "岐阜県各務原市",
    bestTime: "平日午前、休日は開園直後",
    facilities: ["芝生", "水族館", "飲食", "トイレ", "駐車場"],
    ground: "芝生と広場があり、休憩場所を選びやすい。",
    crowd: "高速道路側からの来園者で休日は賑わう。",
    caution: "水辺や人通りの多い通路を避ける。",
  },
  {
    id: "gifu-family-park",
    name: "岐阜ファミリーパーク 芝生広場",
    lat: 35.5078,
    lng: 136.7813,
    type: "outdoor",
    quiet: true,
    score: 85,
    tags: ["岐阜", "芝生", "広い", "家族向け"],
    note: "広い芝生で間隔を取りやすい。坂や段差のある場所は避けると安心。",
    area: "岐阜県岐阜市",
    bestTime: "平日午前、涼しい季節",
    facilities: ["芝生", "遊具", "トイレ", "駐車場", "広場"],
    ground: "芝生が中心。場所により傾斜がある。",
    crowd: "広いため分散しやすいが大型遊具周辺は混む。",
    caution: "傾斜や階段の近くは避けて平らな場所を選ぶ。",
  },
  {
    id: "nabana",
    name: "なばなの里 ベゴニアガーデン休憩周辺",
    lat: 35.0317,
    lng: 136.7024,
    type: "indoor",
    quiet: false,
    score: 73,
    tags: ["三重", "屋内", "観光", "雨の日"],
    note: "観光の合間に休憩しやすい。季節イベント時は混雑前提で短時間向き。",
    area: "三重県桑名市",
    bestTime: "平日昼前、イルミ期間外",
    facilities: ["屋内", "飲食", "トイレ", "駐車場", "観光"],
    ground: "屋内床。はいはいは休憩時の短時間向き。",
    crowd: "花やイルミネーションの時期は混雑しやすい。",
    caution: "展示や通行の妨げにならない場所を選ぶ。",
  },
  {
    id: "chubu-park",
    name: "東員町中部公園 芝生広場",
    lat: 35.0748,
    lng: 136.5879,
    type: "outdoor",
    quiet: true,
    score: 83,
    tags: ["三重", "芝生", "広い", "遊具"],
    note: "芝生が広く、家族連れの休憩に向く。遊具周辺は混みやすい。",
    area: "三重県東員町",
    bestTime: "平日午前、休日は朝早め",
    facilities: ["芝生", "遊具", "トイレ", "駐車場", "木陰"],
    ground: "芝生が広く、敷物を使って過ごしやすい。",
    crowd: "遊具周辺は混雑、芝生端は比較的落ち着く。",
    caution: "遊具に向かう子どもの動線から少し離れる。",
  },
  {
    id: "mos-inazawa-across",
    name: "モスバーガー 稲沢アクロスプラザ店",
    lat: 35.2386,
    lng: 136.806,
    type: "indoor",
    quiet: false,
    score: 86,
    tags: ["稲沢", "カフェ", "キッズルーム", "屋内", "食事"],
    note: "キッズルーム併設の食事スペース。床で動ける場所として候補にしやすい。",
    area: "稲沢市大塚南",
    bestTime: "昼ピーク前、夕方前",
    facilities: ["キッズルーム", "プレイスペース", "食事", "駐車場", "屋内"],
    ground: "キッズルーム内のプレイスペース。清掃状況と混雑を見て利用。",
    crowd: "食事時間帯は混みやすい。",
    caution: "飲食店内のため、キッズルーム席の空きと利用条件を来店前に確認。",
    source: "アクロスプラザ稲沢 / モス公式",
    sourceUrl: "https://acrossplaza.jp/inazawa/shop/shop09.html",
  },
  {
    id: "hachinosu-ichinomiya",
    name: "はちの巣カフェ 一宮店",
    lat: 35.3398,
    lng: 136.8424,
    type: "indoor",
    quiet: false,
    score: 84,
    tags: ["一宮", "カフェ", "キッズスペース", "モーニング", "駐車場"],
    note: "店内キッズスペースと目の届く席の案内があり、屋内はいはい候補にしやすい。",
    area: "一宮市春明",
    bestTime: "モーニング時間、ランチ前",
    facilities: ["キッズスペース", "モーニング", "ランチ", "駐車場", "屋内"],
    ground: "店内キッズスペース。床面の状態と対象年齢を現地確認。",
    crowd: "人気カフェのため食事時間帯は混みやすい。",
    caution: "公式サイトにリニューアル予定の案内あり。キッズスペース継続有無も訪問前確認。",
    source: "はちの巣カフェ公式",
    sourceUrl: "https://hachinosu-cafe.com/ichinomiya/index.html",
  },
  {
    id: "hangout-coffee",
    name: "Hang out coffee",
    lat: 35.290368,
    lng: 136.816224,
    type: "indoor",
    quiet: true,
    score: 88,
    tags: ["一宮", "カフェ", "キッズスペース", "キッズルーム", "ランチ"],
    note: "キッズスペース併設のカフェ。間仕切りされたキッズルーム情報があり、はいはい向き。",
    area: "一宮市森本",
    bestTime: "ランチ予約枠、平日昼前",
    facilities: ["キッズスペース", "キッズルーム", "ランチ", "屋内", "駐車場"],
    ground: "屋内キッズスペース/キッズルーム。床で過ごせる前提の候補。",
    crowd: "キッズルームは時間制・予約制情報あり。事前確認が安心。",
    caution: "営業時間や予約条件は店舗情報で確認。",
    source: "NAVITIME / ハローいちのみや",
    sourceUrl: "https://www.navitime.co.jp/poi?spot=02301-4500256",
  },
  {
    id: "oyama-cafe",
    name: "おやまのカフェ",
    lat: 35.3125,
    lng: 136.7954,
    type: "indoor",
    quiet: true,
    score: 82,
    tags: ["一宮", "カフェ", "キッズスペース", "遊具", "福祉施設"],
    note: "店内キッズスペースの案内があり、屋内で赤ちゃんを休ませやすい候補。",
    area: "一宮市北丹町",
    bestTime: "平日午前から昼前",
    facilities: ["キッズスペース", "遊具", "屋内", "カフェ", "休憩"],
    ground: "店内キッズスペース。敷地内遊具は歩ける子向けなので分けて利用。",
    crowd: "施設内カフェのため営業日・時間を確認したい。",
    caution: "療育サポートプラザ内のため、施設利用者への配慮を優先。",
    source: "一宮モーニング公式 / 樫の木福祉会",
    sourceUrl: "https://ichinomiya-morning.com/shop/67-2/",
  },
];

const storageKey = "haihai-map-custom-places";
const state = {
  filter: "all",
  quietOnly: false,
  query: "",
  activeId: null,
  map: null,
  markers: new Map(),
  userMarker: null,
  userLocation: null,
  pickingLocation: false,
};

const elements = {
  panel: document.querySelector(".panel"),
  list: document.querySelector("#placeList"),
  count: document.querySelector("#resultCount"),
  status: document.querySelector("#mapStatus"),
  search: document.querySelector("#searchInput"),
  quietOnly: document.querySelector("#quietOnly"),
  locate: document.querySelector("#locateButton"),
  addForm: document.querySelector("#addForm"),
  placeName: document.querySelector("#placeName"),
  placeNote: document.querySelector("#placeNote"),
  placeLat: document.querySelector("#placeLat"),
  placeLng: document.querySelector("#placeLng"),
  appShell: document.querySelector(".app-shell"),
  sheetToggle: document.querySelector("#sheetToggle"),
  sheetToggleText: document.querySelector("#sheetToggleText"),
};

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };
    return entities[char];
  });
}

function getCustomPlaces() {
  try {
    return JSON.parse(localStorage.getItem(storageKey) || "[]");
  } catch {
    return [];
  }
}

function saveCustomPlace(place) {
  const places = getCustomPlaces();
  places.push(place);
  localStorage.setItem(storageKey, JSON.stringify(places));
}

function getPlaces() {
  return [...defaultPlaces, ...getCustomPlaces()];
}

function getDistanceKm(place) {
  if (!state.userLocation) return null;

  const toRadians = (degrees) => (degrees * Math.PI) / 180;
  const earthRadiusKm = 6371;
  const lat1 = toRadians(state.userLocation.lat);
  const lat2 = toRadians(place.lat);
  const deltaLat = toRadians(place.lat - state.userLocation.lat);
  const deltaLng = toRadians(place.lng - state.userLocation.lng);
  const haversine =
    Math.sin(deltaLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLng / 2) ** 2;

  return 2 * earthRadiusKm * Math.atan2(Math.sqrt(haversine), Math.sqrt(1 - haversine));
}

function formatDistance(km) {
  if (km === null) return "";
  if (km < 1) return `${Math.round(km * 1000)}m`;
  return `${km.toFixed(km < 10 ? 1 : 0)}km`;
}

function getPlaceSearchText(place) {
  return [
    place.name,
    place.area,
    place.note,
    place.bestTime,
    place.ground,
    place.crowd,
    place.source,
    ...(place.tags || []),
    ...(place.facilities || []),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

function getPlaceDetails(place) {
  return {
    area: place.area || "登録スポット",
    bestTime: place.bestTime || "自分用メモを確認",
    facilities: place.facilities || place.tags || ["自分用"],
    ground: place.ground || place.note || "詳細未登録",
    crowd: place.crowd || "混雑情報未登録",
    caution: place.caution || "現地の案内と安全を優先してください。",
    source: place.source || "アプリ登録データ",
  };
}

function googleMapsUrl(place) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${place.name} ${place.lat},${place.lng}`)}`;
}

function getFilteredPlaces() {
  const query = state.query.trim().toLowerCase();
  return getPlaces()
    .filter((place) => {
      const typeMatch = state.filter === "all" || place.type === state.filter;
      const quietMatch = !state.quietOnly || place.quiet;
      const text = getPlaceSearchText(place);
      const queryMatch = !query || text.includes(query);
      return typeMatch && quietMatch && queryMatch;
    })
    .sort((a, b) => {
      if (!state.userLocation) return b.score - a.score;
      return getDistanceKm(a) - getDistanceKm(b);
    });
}

function tagClass(place, tag) {
  if (tag === "屋内") return "";
  if (place.type === "outdoor") return "outdoor";
  if (tag.includes("混") || tag.includes("短時間")) return "caution";
  return "";
}

function renderList(places) {
  elements.count.textContent = `${places.length}件`;
  elements.list.innerHTML = "";

  places.forEach((place) => {
    const distance = formatDistance(getDistanceKm(place));
    const details = getPlaceDetails(place);
    const card = document.createElement("article");
    card.className = `place-card${state.activeId === place.id ? " active" : ""}`;
    card.tabIndex = 0;
    card.dataset.id = place.id;
    card.innerHTML = `
      <header>
        <h3>${escapeHtml(place.name)}</h3>
        <span class="score">${distance ? escapeHtml(distance) : escapeHtml(place.score)}</span>
      </header>
      <p class="note">${escapeHtml(place.note)}</p>
      <dl class="mini-details">
        <div><dt>エリア</dt><dd>${escapeHtml(details.area)}</dd></div>
        <div><dt>目安</dt><dd>${escapeHtml(details.bestTime)}</dd></div>
      </dl>
      <div class="tags">
        ${place.tags
          .map((tag) => `<span class="tag ${tagClass(place, tag)}">${escapeHtml(tag)}</span>`)
          .join("")}
      </div>
      <a class="map-link" href="${googleMapsUrl(place)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(place.name)}をGoogleマップで開く">
        Googleマップで開く
      </a>
    `;
    card.addEventListener("click", () => focusPlace(place.id));
    card.querySelector(".map-link").addEventListener("click", (event) => {
      event.stopPropagation();
    });
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        focusPlace(place.id);
      }
    });
    elements.list.appendChild(card);
  });
}

function makeIcon(place) {
  const color = place.type === "indoor" ? "#207567" : "#5f8d3b";
  return L.divIcon({
    className: "place-marker",
    html: `<span style="background:${color};"></span>`,
    iconSize: [22, 22],
    iconAnchor: [11, 11],
  });
}

function popupHtml(place) {
  const details = getPlaceDetails(place);
  const distance = formatDistance(getDistanceKm(place));
  return `
    <div class="popup-head">
      <p class="popup-title">${escapeHtml(place.name)}</p>
      <span>${distance ? escapeHtml(distance) : `${escapeHtml(place.score)}点`}</span>
    </div>
    <p class="popup-note">${escapeHtml(place.note)}</p>
    <dl class="popup-details">
      <div><dt>エリア</dt><dd>${escapeHtml(details.area)}</dd></div>
      <div><dt>おすすめ</dt><dd>${escapeHtml(details.bestTime)}</dd></div>
      <div><dt>床・地面</dt><dd>${escapeHtml(details.ground)}</dd></div>
      <div><dt>混み具合</dt><dd>${escapeHtml(details.crowd)}</dd></div>
      <div><dt>注意</dt><dd>${escapeHtml(details.caution)}</dd></div>
      <div><dt>確認元</dt><dd>${escapeHtml(details.source)}</dd></div>
    </dl>
    <div class="popup-facilities">
      ${details.facilities.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
    </div>
    <a class="map-link popup-map-link" href="${googleMapsUrl(place)}" target="_blank" rel="noopener noreferrer">
      Googleマップで開く
    </a>
  `;
}

function fitVisiblePlaces(places, animate = true) {
  if (!state.map || !places.length) return;

  const bounds = L.latLngBounds(places.map((place) => [place.lat, place.lng]));
  state.map.fitBounds(bounds.pad(0.16), { animate, maxZoom: 14 });
}

function renderMarkers(places) {
  state.markers.forEach((marker) => marker.remove());
  state.markers.clear();

  places.forEach((place) => {
    const marker = L.marker([place.lat, place.lng], { icon: makeIcon(place) })
      .addTo(state.map)
      .bindPopup(popupHtml(place));
    marker.on("click", () => {
      state.activeId = place.id;
      renderList(getFilteredPlaces());
    });
    state.markers.set(place.id, marker);
  });

  fitVisiblePlaces(places);
}

function render() {
  const places = getFilteredPlaces();
  renderList(places);
  if (state.map) {
    renderMarkers(places);
  }
}

function focusPlace(id) {
  const place = getPlaces().find((item) => item.id === id);
  const marker = state.markers.get(id);
  if (!place || !marker) return;

  state.activeId = id;
  renderList(getFilteredPlaces());
  state.map.setView([place.lat, place.lng], 16, { animate: true });
  marker.openPopup();
}

function setStatus(message) {
  elements.status.textContent = message;
}

function initMap() {
  if (!window.L) {
    setStatus("地図ライブラリを読み込めませんでした。ネットワーク接続を確認してください。");
    return;
  }

  state.map = L.map("map", {
    zoomControl: false,
    scrollWheelZoom: true,
  }).setView([35.1709, 136.8815], 10);

  L.control.zoom({ position: "bottomright" }).addTo(state.map);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(state.map);

  state.map.on("click", (event) => {
    elements.placeLat.value = event.latlng.lat.toFixed(5);
    elements.placeLng.value = event.latlng.lng.toFixed(5);
    if (state.pickingLocation) {
      setUserLocation(event.latlng.lat, event.latlng.lng, {
        moveMap: false,
        status: "指定した位置から近い順に並べました",
      });
      state.pickingLocation = false;
    }
  });

  setStatus("現在地ボタンで近い順にできます");
  render();
  requestAnimationFrame(() => {
    state.map.invalidateSize();
    fitVisiblePlaces(getFilteredPlaces(), false);
  });
  setTimeout(() => {
    state.map.invalidateSize();
    fitVisiblePlaces(getFilteredPlaces(), false);
  }, 250);
}

window.addEventListener("resize", () => {
  if (!state.map) return;
  state.map.invalidateSize();
  fitVisiblePlaces(getFilteredPlaces(), false);
});

function setUserLocation(lat, lng, options = {}) {
  state.userLocation = { lat, lng };
  if (state.userMarker) state.userMarker.remove();
  state.userMarker = L.circleMarker([lat, lng], {
    radius: 9,
    color: "#134f47",
    fillColor: "#f2b84b",
    fillOpacity: 0.9,
    weight: 3,
  })
    .addTo(state.map)
    .bindPopup("現在地");
  elements.placeLat.value = lat.toFixed(5);
  elements.placeLng.value = lng.toFixed(5);
  render();
  if (options.moveMap) {
    state.map.setView([lat, lng], 15, { animate: true });
  }
  setStatus(options.status || "現在地から近い順に並べました");
}

function enterManualLocationMode() {
  state.pickingLocation = true;
  setStatus("地図をタップして現在地を指定してください");
}

function locateUser() {
  if (!window.navigator?.geolocation || !state.map) {
    enterManualLocationMode();
    return;
  }

  state.pickingLocation = true;
  setStatus("現在地を取得中。地図タップでも指定できます");
  window.navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      state.pickingLocation = false;
      setUserLocation(latitude, longitude, {
        moveMap: true,
        status: "現在地から近い順に並べました",
      });
    },
    () => enterManualLocationMode(),
    { enableHighAccuracy: true, timeout: 9000 }
  );
}

function setSheetCollapsed(collapsed) {
  elements.appShell.classList.toggle("sheet-collapsed", collapsed);
  elements.sheetToggle.setAttribute("aria-expanded", String(!collapsed));
  elements.sheetToggleText.textContent = collapsed ? "一覧を開く" : "一覧を小さく";
  if (!state.map) return;
  setTimeout(() => {
    state.map.invalidateSize();
  }, 220);
}

function isMobileSheet() {
  return window.matchMedia("(max-width: 820px)").matches;
}

function setupSheetDrag() {
  let startY = 0;
  let currentY = 0;
  let dragging = false;

  function canStartDrag(clientY) {
    const rect = elements.panel.getBoundingClientRect();
    const fromSheetTop = clientY - rect.top;
    const isCollapsed = elements.appShell.classList.contains("sheet-collapsed");
    const canStartFromTop = fromSheetTop <= 92;
    return isMobileSheet() && (isCollapsed || canStartFromTop);
  }

  function beginDrag(clientY) {
    dragging = true;
    startY = clientY;
    currentY = clientY;
    elements.panel.classList.add("dragging");
  }

  function updateDrag(clientY) {
    if (!dragging) return 0;

    currentY = clientY;
    const deltaY = currentY - startY;
    const isCollapsed = elements.appShell.classList.contains("sheet-collapsed");
    const offset = isCollapsed ? Math.min(0, Math.max(deltaY, -90)) : Math.max(0, Math.min(deltaY, 140));
    elements.panel.style.transform = `translateY(${offset}px)`;
    return deltaY;
  }

  function endDrag() {
    if (!dragging) return;

    const deltaY = currentY - startY;
    dragging = false;
    elements.panel.classList.remove("dragging");
    elements.panel.style.transform = "";

    if (deltaY > 52) {
      setSheetCollapsed(true);
    } else if (deltaY < -42) {
      setSheetCollapsed(false);
    }
  }

  elements.panel.addEventListener("pointerdown", (event) => {
    if (!canStartDrag(event.clientY)) return;

    beginDrag(event.clientY);
    elements.panel.setPointerCapture(event.pointerId);
  });

  elements.panel.addEventListener("pointermove", (event) => {
    if (!dragging) return;

    const deltaY = updateDrag(event.clientY);
    if (Math.abs(deltaY) > 8) {
      event.preventDefault();
    }
  });

  function finishDrag(event) {
    if (elements.panel.hasPointerCapture(event.pointerId)) {
      elements.panel.releasePointerCapture(event.pointerId);
    }
    endDrag();
  }

  elements.panel.addEventListener("touchstart", (event) => {
    if (event.touches.length !== 1) return;

    const touch = event.touches[0];
    if (!canStartDrag(touch.clientY)) return;
    beginDrag(touch.clientY);
  });

  elements.panel.addEventListener(
    "touchmove",
    (event) => {
      if (!dragging || event.touches.length !== 1) return;

      const deltaY = updateDrag(event.touches[0].clientY);
      if (Math.abs(deltaY) > 8) {
        event.preventDefault();
      }
    },
    { passive: false }
  );

  elements.panel.addEventListener("touchend", () => {
    endDrag();
  });

  elements.panel.addEventListener("touchcancel", () => {
    if (dragging) {
      dragging = false;
      elements.panel.classList.remove("dragging");
      elements.panel.style.transform = "";
    }
  });

  elements.panel.addEventListener("pointerup", finishDrag);
  elements.panel.addEventListener("pointercancel", finishDrag);
}

document.querySelectorAll(".segment").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".segment").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state.filter = button.dataset.filter;
    state.activeId = null;
    render();
  });
});

elements.search.addEventListener("input", (event) => {
  state.query = event.target.value;
  state.activeId = null;
  render();
});

elements.quietOnly.addEventListener("change", (event) => {
  state.quietOnly = event.target.checked;
  state.activeId = null;
  render();
});

elements.locate.addEventListener("click", locateUser);

elements.sheetToggle.addEventListener("click", () => {
  setSheetCollapsed(!elements.appShell.classList.contains("sheet-collapsed"));
});

elements.addForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const lat = Number(elements.placeLat.value);
  const lng = Number(elements.placeLng.value);

  if (!Number.isFinite(lat) || !Number.isFinite(lng) || Math.abs(lat) > 90 || Math.abs(lng) > 180) {
    setStatus("緯度・経度を確認してください");
    return;
  }

  const place = {
    id: `custom-${Date.now()}`,
    name: elements.placeName.value.trim(),
    note: elements.placeNote.value.trim(),
    lat,
    lng,
    type: "outdoor",
    quiet: true,
    score: 80,
    tags: ["登録済み", "自分用"],
  };

  saveCustomPlace(place);
  elements.addForm.reset();
  state.filter = "all";
  state.activeId = place.id;
  document.querySelectorAll(".segment").forEach((item) => {
    item.classList.toggle("active", item.dataset.filter === "all");
  });
  render();
  focusPlace(place.id);
  setStatus("スポットを追加しました");
});

window.addEventListener("load", initMap);
setupSheetDrag();
