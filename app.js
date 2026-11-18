const equipment = [
  { id: 1, name: "褥瘡／燙傷傷口模型", qty: 2, brand: "Laerdal", model: "VT-900", category: "傷口與注射", note: "適合褥瘡與燙傷傷口辨識、評估及換藥教學。" },
  { id: 2, name: "導尿管置放模型", qty: 3, brand: "Laerdal", model: "375-21001", category: "穿刺與導管", note: "可更換配件，男性與女性導尿操作均可使用。" },
  { id: 3, name: "傷口縫合模型", qty: 7, brand: "Life/form", model: "LF01028U", category: "傷口與注射", note: "可自行切割傷口；領取時請確認皮膚墊耗損狀況。" },
  { id: 4, name: "氣胸訓練模型", qty: 1, brand: "Laerdal", model: "26005001", category: "氣道與急救", note: "適用於胸腔減壓與氣胸處置訓練。" },
  { id: 5, name: "下肢穿刺模擬訓練模型", qty: 1, brand: "Laerdal", model: "262-00001", category: "穿刺與導管", note: "請於歸還前排空模擬液並擦拭表面。" },
  { id: 6, name: "脊椎穿刺模型", qty: 1, brand: "Gaumard", model: "S411", category: "穿刺與導管", note: "適用腰椎穿刺定位與操作練習。" },
  { id: 7, name: "氣管插管練習模型", qty: 3, brand: "Laerdal", model: "250000", category: "氣道與急救", note: "可供氣管插管、甦醒球與氣道評估練習。" },
  { id: 8, name: "嬰兒氣道處理訓練模型", qty: 2, brand: "Laerdal", model: "250-00250", category: "婦兒科", note: "嬰兒氣道處置專用，請使用中心指定潤滑劑。" },
  { id: 9, name: "鼻胃管置入練習模型", qty: 2, brand: "Laerdal", model: "375-10001", category: "穿刺與導管", note: "可進行鼻胃管置入及氣切照護練習。" },
  { id: 10, name: "靜脈軟針置入練習模型", qty: 3, brand: "Laerdal", model: "270-00001", category: "傷口與注射", note: "含模擬手臂與循環配件，請一併點交。" },
  { id: 11, name: "婦科內診檢查模型", qty: 2, brand: "KOKEN", model: "LM-050", category: "診察與評估", note: "含子宮頸抹片篩檢操作配件，領取時需核對附加道具。" },
  { id: 12, name: "基本救命術（BLS）模型", qty: 1, brand: "Laerdal", model: "310055", category: "氣道與急救", note: "適合基本救命術課程與團隊訓練。" },
  { id: 13, name: "簡易燈號成人半身 CPR 模型", qty: 2, brand: "Prestan", model: "PP-AM-100M-MS", category: "氣道與急救", note: "具按壓燈號回饋功能；領取時請確認電池電量。" },
  { id: 14, name: "半身中央及週邊靜脈導管照護模型", qty: 2, brand: "Laerdal", model: "VT-400P", category: "穿刺與導管", note: "適用中央與週邊靜脈導管照護教學。" },
  { id: 15, name: "皮下注射模型", qty: 2, brand: "Life/form", model: "LF01008U", category: "傷口與注射", note: "適合皮下注射定位與角度練習。" },
  { id: 16, name: "肌肉注射模型", qty: 2, brand: "Nasco", model: "LF01184U", category: "傷口與注射", note: "適合肌肉注射定位與操作練習。" },
  { id: 17, name: "眼底鏡病變判讀模型", qty: 1, brand: "Adam, Rouilly", model: "AR303", category: "診察與評估", note: "供眼底鏡操作及常見病變辨識教學。" },
  { id: 18, name: "耳道病變判讀模型", qty: 1, brand: "Adam, Rouilly", model: "AR302", category: "診察與評估", note: "供耳鏡操作及耳道病變辨識教學。" },
  { id: 19, name: "Mr. Hurt Trauma Head", qty: 2, brand: "Laerdal", model: "261-02001", category: "診察與評估", note: "適合頭部外傷評估、清創及包紮訓練。" },
  { id: 20, name: "CVC 穿刺插入模擬裝置模型", qty: 1, brand: "Kyoto Kagaku", model: "M93B", category: "穿刺與導管", note: "中央靜脈導管穿刺與置入練習專用。" },
  { id: 21, name: "半身中央靜脈訓練模型", qty: 1, brand: "Laerdal", model: "IV Torso", category: "穿刺與導管", note: "適合中央靜脈路徑辨識與照護示範。" },
  { id: 22, name: "高級心臟救命術訓練模型", qty: 1, brand: "Laerdal", model: "MegaCode Kelly", category: "氣道與急救", note: "適合 ACLS 情境與團隊急救訓練。" },
  { id: 23, name: "電子式動脈採血手臂", qty: 2, brand: "潗大科技", model: "ARB-001", category: "傷口與注射", note: "電子式回饋採血手臂，領取時請確認電源與配件。" },
  { id: 24, name: "成人呼吸音及心音聽診練習模型", qty: 1, brand: "臨床技能中心", model: "聽診訓練型", category: "診察與評估", note: "包含多種呼吸音與心音模擬情境。" },
  { id: 25, name: "嬰兒全身護理模型", qty: 1, brand: "Laerdal", model: "180011", category: "婦兒科", note: "一歲嬰兒全身模型，適合基礎護理與身體評估。" },
  { id: 26, name: "哽塞娃娃", qty: 1, brand: "Laerdal", model: "Baby Anne", category: "婦兒科", note: "適合嬰兒異物哽塞排除訓練。" },
  { id: 27, name: "簡易嬰兒 QCPR", qty: 2, brand: "Laerdal", model: "133-01050", category: "婦兒科", note: "支援 QCPR 回饋；領取時請確認連線裝置。" },
  { id: 28, name: "新生兒急救模組", qty: 1, brand: "Nasco", model: "LF01420", category: "婦兒科", note: "新生兒甦醒、氣道與循環處置訓練模組。" },
  { id: 29, name: "5 歲兒童護理假病人", qty: 1, brand: "Gaumard", model: "S150", category: "婦兒科", note: "適合兒童身體評估及護理技能訓練。" },
  { id: 30, name: "耳朵檢查模型", qty: 1, brand: "Kyoto Kagaku", model: "M88", category: "診察與評估", note: "附多種耳部病灶配件，領取時需逐項點交。" },
  { id: 31, name: "肛門指診檢查模型", qty: 1, brand: "Clinical Training", model: "SY-10402-PRO", category: "診察與評估", note: "適合肛門指診與常見病變觸診教學。" },
  { id: 32, name: "乳房觸診模型", qty: 1, brand: "Gaumard", model: "S230.40", category: "診察與評估", note: "含不同病灶乳房配件，請於使用後清潔表面。" },
  { id: 33, name: "氣道處理模型", qty: 1, brand: "Gaumard", model: "S315", category: "氣道與急救", note: "適合成人氣道評估與處置教學。" },
  { id: 34, name: "局部麻醉超音波穿刺訓練仿體", qty: 2, brand: "3B", model: "1019637", category: "監護與超音波", note: "超音波導引穿刺訓練仿體，請使用指定穿刺針。" },
  { id: 35, name: "行動訓練監護儀", qty: 2, brand: "REALITi / Nasco", model: "行動訓練系統", category: "監護與超音波", note: "含平板、控制裝置及收納箱，領取時需完成配件點交。" },
  { id: 36, name: "超音波影像儀", qty: 2, brand: "ASUS", model: "LU700", category: "監護與超音波", note: "行動式超音波影像設備；使用人員需具備基本操作能力。" }
].map(item => ({ ...item, image: `./assets/item-${String(item.id).padStart(2, "0")}.webp` }));

const categoryOrder = ["全部", "氣道與急救", "穿刺與導管", "傷口與注射", "診察與評估", "婦兒科", "監護與超音波"];
const storageKey = "clinical-skills-bookings-v1";
const state = {
  date: "",
  start: "09:00",
  end: "11:30",
  category: "全部",
  query: "",
  availableOnly: false,
  sort: "id",
  cart: new Map(),
  bookingFilter: "active"
};

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const pad = value => String(value).padStart(2, "0");
const isoDate = date => `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
const addDays = (date, count) => { const next = new Date(date); next.setDate(next.getDate() + count); return next; };
const minutes = time => { const [hour, minute] = time.split(":").map(Number); return hour * 60 + minute; };
const escapeHtml = value => String(value).replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);

function dateFromIso(value) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function formatDate(value, options = {}) {
  return new Intl.DateTimeFormat("zh-TW", { month: "long", day: "numeric", weekday: "short", ...options }).format(dateFromIso(value));
}

function formatLongDate(value) {
  return new Intl.DateTimeFormat("zh-TW", { year: "numeric", month: "long", day: "numeric", weekday: "long" }).format(dateFromIso(value));
}

function overlaps(aStart, aEnd, bStart, bEnd) {
  return minutes(aStart) < minutes(bEnd) && minutes(aEnd) > minutes(bStart);
}

function getBookings() {
  try { return JSON.parse(localStorage.getItem(storageKey)) || []; }
  catch { return []; }
}

function saveBookings(bookings) {
  localStorage.setItem(storageKey, JSON.stringify(bookings));
}

function seedBookings() {
  if (localStorage.getItem(storageKey)) return;
  const today = new Date();
  saveBookings([
    {
      id: `CS-${isoDate(addDays(today, 2)).replaceAll("-", "")}-017`,
      date: isoDate(addDays(today, 2)), start: "13:30", end: "16:00", status: "confirmed",
      purpose: "護理實作課－靜脈注射", department: "護理部", borrower: "王怡文",
      location: "臨床技能中心 302 教室",
      items: [{ id: 10, qty: 2, name: "靜脈軟針置入練習模型" }, { id: 15, qty: 1, name: "皮下注射模型" }],
      createdAt: new Date().toISOString()
    },
    {
      id: `CS-${isoDate(addDays(today, -5)).replaceAll("-", "")}-008`,
      date: isoDate(addDays(today, -5)), start: "09:00", end: "11:00", status: "completed",
      purpose: "基本救命術教師訓練", department: "護理部", borrower: "王怡文",
      location: "臨床技能中心 201 教室",
      items: [{ id: 13, qty: 2, name: "簡易燈號成人半身 CPR 模型" }],
      createdAt: addDays(today, -10).toISOString()
    }
  ]);
}

function mockBusyCount(item, date = state.date, start = state.start) {
  const seed = Number(date.replaceAll("-", "")) + item.id * 17 + Math.floor(minutes(start) / 30) * 7;
  if (item.qty === 1) return seed % 7 === 0 ? 1 : 0;
  const ceiling = Math.min(item.qty, item.qty > 3 ? 4 : item.qty + 1);
  return seed % ceiling;
}

function bookedByUser(item, date = state.date, start = state.start, end = state.end) {
  return getBookings()
    .filter(booking => booking.date === date && !["cancelled", "completed"].includes(booking.status) && overlaps(start, end, booking.start, booking.end))
    .flatMap(booking => booking.items)
    .filter(entry => entry.id === item.id)
    .reduce((sum, entry) => sum + entry.qty, 0);
}

function baseAvailability(item, date = state.date, start = state.start, end = state.end) {
  return Math.max(0, item.qty - mockBusyCount(item, date, start) - bookedByUser(item, date, start, end));
}

function remainingAvailability(item) {
  return Math.max(0, baseAvailability(item) - (state.cart.get(item.id) || 0));
}

function statusFor(item) {
  const remaining = remainingAvailability(item);
  if (remaining <= 0) return { key: "unavailable", label: state.cart.get(item.id) ? "此時段已選滿" : "此時段已借完" };
  if (remaining === 1 || remaining / item.qty <= .35) return { key: "low", label: `僅剩 ${remaining}／${item.qty}` };
  return { key: "available", label: `可借 ${remaining}／${item.qty}` };
}

function buildTimeOptions() {
  const startSelect = $("#start-time");
  const endSelect = $("#end-time");
  for (let value = 8 * 60; value <= 18 * 60; value += 30) {
    const time = `${pad(Math.floor(value / 60))}:${pad(value % 60)}`;
    startSelect.insertAdjacentHTML("beforeend", `<option value="${time}">${time}</option>`);
  }
  for (let value = 8 * 60 + 30; value <= 19 * 60; value += 30) {
    const time = `${pad(Math.floor(value / 60))}:${pad(value % 60)}`;
    endSelect.insertAdjacentHTML("beforeend", `<option value="${time}">${time}</option>`);
  }
  startSelect.value = state.start;
  endSelect.value = state.end;
}

function renderDuration() {
  const total = minutes(state.end) - minutes(state.start);
  const hours = Math.floor(total / 60);
  const mins = total % 60;
  $("#duration-label").textContent = `${hours ? `${hours} 小時` : ""}${hours && mins ? " " : ""}${mins ? `${mins} 分` : ""}`;
}

function renderWeekStrip() {
  const selected = dateFromIso(state.date);
  const today = new Date();
  const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const selectedStart = new Date(selected.getFullYear(), selected.getMonth(), selected.getDate());
  const daysFromToday = Math.round((selectedStart - todayStart) / 86400000);
  const startDay = daysFromToday >= 0 && daysFromToday < 7 ? todayStart : selectedStart;
  const html = Array.from({ length: 7 }, (_, index) => {
    const date = addDays(startDay, index);
    const value = isoDate(date);
    const available = equipment.reduce((sum, item) => sum + baseAvailability(item, value), 0);
    const percent = Math.round(available / 62 * 100);
    const isToday = value === isoDate(today);
    const status = percent >= 72 ? { key: "available", label: "庫存充足" } : percent >= 56 ? { key: "moderate", label: "尚可預約" } : { key: "busy", label: "預約較多" };
    const selectedClass = value === state.date ? "is-selected" : "";
    return `<button class="day-button status-${status.key} ${selectedClass}" data-date="${value}" type="button" aria-pressed="${value === state.date}" aria-label="${date.getMonth() + 1}月${date.getDate()}日，${available}件可借，${status.label}">
      <span class="day-top"><span class="day-title"><strong>${isToday ? "今天" : new Intl.DateTimeFormat("zh-TW", { weekday: "short" }).format(date)}</strong><span>${date.getMonth() + 1}/${date.getDate()}</span></span><span class="day-check" aria-hidden="true">✓</span></span>
      <span class="day-availability"><strong>${available}</strong><span>／62 件可借</span></span>
      <span class="day-status"><i></i><span>${status.label}</span><span>${percent}%</span></span>
      <span class="day-load"><i style="width:${percent}%"></i></span>
    </button>`;
  }).join("");
  $("#week-strip").innerHTML = html;
  const hint = $(".quick-date-heading > div:first-child > span");
  if (hint) hint.textContent = `以下數量依你選擇的 ${state.start}–${state.end} 時段即時計算`;
}

function renderCategoryTabs() {
  $("#category-tabs").innerHTML = categoryOrder.map(category => `
    <button type="button" class="category-tab ${state.category === category ? "is-active" : ""}" data-category="${category}" role="tab">${category}</button>
  `).join("");
}

function visibleEquipment() {
  const term = state.query.trim().toLowerCase();
  return equipment
    .filter(item => state.category === "全部" || item.category === state.category)
    .filter(item => !term || `${item.name} ${item.brand} ${item.model}`.toLowerCase().includes(term))
    .filter(item => !state.availableOnly || remainingAvailability(item) > 0)
    .sort((a, b) => state.sort === "name" ? a.name.localeCompare(b.name, "zh-Hant") : a.id - b.id);
}

function renderEquipment() {
  const items = visibleEquipment();
  const availableCount = equipment.filter(item => baseAvailability(item) > 0).length;
  $("#available-type-count").textContent = availableCount;
  $("#empty-state").classList.toggle("is-hidden", items.length > 0);
  $("#equipment-grid").innerHTML = items.map(item => {
    const status = statusFor(item);
    const inCart = state.cart.get(item.id) || 0;
    return `<article class="equipment-card ${status.key === "unavailable" && !inCart ? "is-unavailable" : ""}">
      <div class="equipment-image" data-detail="${item.id}" role="button" tabindex="0" aria-label="查看${escapeHtml(item.name)}詳情">
        <span class="item-number">#${pad(item.id)}</span>
        <img src="${item.image}" alt="${escapeHtml(item.name)}" loading="lazy">
        <span class="stock-chip ${status.key}"><i></i>${status.label}</span>
      </div>
      <div class="equipment-body">
        <p class="equipment-brand">${escapeHtml(item.brand)}</p>
        <h3>${escapeHtml(item.name)}</h3>
        <p class="equipment-model">${escapeHtml(item.model)} · 共 ${item.qty} ${item.id === 35 ? "組" : item.id === 36 ? "台" : "具"}</p>
        <div class="equipment-actions">
          <button class="details-button" data-detail="${item.id}" type="button">查看詳情</button>
          <button class="add-button ${inCart ? "in-cart" : ""}" data-add="${item.id}" type="button" ${remainingAvailability(item) <= 0 ? "disabled" : ""}>${inCart ? `再加一具 · ${inCart}` : "＋ 加入"}</button>
        </div>
      </div>
    </article>`;
  }).join("");
}

function renderCart() {
  const entries = [...state.cart.entries()].map(([id, qty]) => ({ item: equipment.find(entry => entry.id === id), qty }));
  const totalUnits = entries.reduce((sum, entry) => sum + entry.qty, 0);
  $("#cart-badge").textContent = totalUnits;
  $("#mobile-cart-count").textContent = totalUnits;
  $("#cart-total-types").textContent = entries.length;
  $("#cart-total-units").textContent = totalUnits;
  $("#checkout-button").disabled = entries.length === 0;
  $("#cart-empty").classList.toggle("is-hidden", entries.length > 0);
  $("#cart-items").classList.toggle("is-hidden", entries.length === 0);
  $("#mobile-cart-button").classList.toggle("is-hidden", entries.length === 0);
  $("#cart-time").innerHTML = `<strong>${formatLongDate(state.date)}</strong><br>${state.start}–${state.end} · 歸還後保留 30 分鐘點交`;
  $("#cart-items").innerHTML = entries.map(({ item, qty }) => `
    <div class="cart-item">
      <div class="cart-thumb"><img src="${item.image}" alt=""></div>
      <div class="cart-item-name"><strong>${escapeHtml(item.name)}</strong><button type="button" data-remove="${item.id}">移除</button></div>
      <div class="qty-control"><button type="button" data-decrement="${item.id}" aria-label="減少數量">−</button><span>${qty}</span><button type="button" data-increment="${item.id}" aria-label="增加數量" ${qty >= baseAvailability(item) ? "disabled" : ""}>＋</button></div>
    </div>
  `).join("");
}

function renderAllAvailability() {
  renderDuration();
  renderWeekStrip();
  renderCategoryTabs();
  renderEquipment();
  renderCart();
}

function clearCartForTimeChange() {
  if (!state.cart.size) return;
  state.cart.clear();
  showToast("時段已更新", "請依新時段的即時庫存重新選擇教具。", false);
}

function addItem(id) {
  const item = equipment.find(entry => entry.id === id);
  if (!item || remainingAvailability(item) <= 0) return;
  state.cart.set(id, (state.cart.get(id) || 0) + 1);
  renderEquipment();
  renderCart();
}

function removeItem(id) {
  state.cart.delete(id);
  renderEquipment();
  renderCart();
}

function changeQuantity(id, delta) {
  const item = equipment.find(entry => entry.id === id);
  const current = state.cart.get(id) || 0;
  const next = current + delta;
  if (next <= 0) return removeItem(id);
  if (next > baseAvailability(item)) return;
  state.cart.set(id, next);
  renderEquipment();
  renderCart();
}

function showDetail(id) {
  const item = equipment.find(entry => entry.id === id);
  if (!item) return;
  const available = baseAvailability(item);
  $("#detail-content").innerHTML = `<div class="detail-wrap">
    <button class="modal-close detail-close" data-close-detail aria-label="關閉">×</button>
    <div class="detail-hero"><div class="detail-image"><img src="${item.image}" alt="${escapeHtml(item.name)}"></div><div><p class="eyebrow">${escapeHtml(item.category)}</p><h2>${escapeHtml(item.name)}</h2><p>${escapeHtml(item.note)}</p></div></div>
    <div class="detail-body">
      <div class="detail-specs"><div><span>廠牌</span><strong>${escapeHtml(item.brand)}</strong></div><div><span>型號</span><strong>${escapeHtml(item.model)}</strong></div><div><span>選定時段庫存</span><strong>${available}／${item.qty} 可借</strong></div></div>
      <div class="detail-note">領取時將由管理員分配實體資產編號並核對配件；歸還後預留 30 分鐘進行點交與清潔。</div>
      <div class="detail-actions"><button class="primary-button compact" data-detail-add="${item.id}" ${remainingAvailability(item) <= 0 ? "disabled" : ""}>＋ 加入借用清單</button></div>
    </div>
  </div>`;
  $("#detail-modal").showModal();
}

function showCheckout() {
  const entries = [...state.cart.entries()].map(([id, qty]) => ({ item: equipment.find(entry => entry.id === id), qty }));
  $("#modal-booking-summary").innerHTML = `
    <div class="modal-summary-item"><span>使用時間</span><strong>${formatDate(state.date)} ${state.start}–${state.end}</strong></div>
    <div class="modal-summary-item"><span>借用內容</span><strong>${entries.length} 種，共 ${entries.reduce((sum, entry) => sum + entry.qty, 0)} 件教具</strong></div>
  `;
  $("#checkout-modal").showModal();
}

function createBooking(formData) {
  const bookings = getBookings();
  const suffix = String(Math.floor(100 + Math.random() * 900));
  const reference = `CS-${state.date.replaceAll("-", "")}-${suffix}`;
  const booking = {
    id: reference,
    date: state.date,
    start: state.start,
    end: state.end,
    status: "confirmed",
    purpose: formData.get("purpose"),
    department: formData.get("department"),
    borrower: "王怡文",
    phone: formData.get("phone"),
    location: formData.get("location"),
    notes: formData.get("notes"),
    items: [...state.cart.entries()].map(([id, qty]) => ({ id, qty, name: equipment.find(item => item.id === id).name })),
    createdAt: new Date().toISOString()
  };
  bookings.unshift(booking);
  saveBookings(bookings);
  state.cart.clear();
  $("#checkout-form").reset();
  $("#checkout-form [name=department]").value = "護理部";
  $("#checkout-form [name=borrower]").value = "王怡文（A02318）";
  $("#checkout-form [name=phone]").value = "0912-345-678";
  $("#checkout-modal").close();
  renderAllAvailability();
  renderBookings();
  showToast("預約已自動成立", `預約編號 ${reference}，可在「我的預約」查看。`);
}

function bookingStatusLabel(status) {
  return ({ confirmed: "待領取", borrowed: "借用中", inspection: "待檢查", completed: "已完成", cancelled: "已取消" })[status] || status;
}

function renderBookings() {
  const bookings = getBookings();
  const active = bookings.filter(booking => !["completed", "cancelled"].includes(booking.status));
  const borrowed = bookings.filter(booking => booking.status === "borrowed");
  const completed = bookings.filter(booking => booking.status === "completed");
  $("#booking-count").textContent = active.length;
  $("#booking-summary").innerHTML = [
    ["◷", active.length, "即將領取"], ["↗", borrowed.length, "借用中"], ["✓", completed.length, "已完成"], ["⊙", active.reduce((sum, booking) => sum + booking.items.reduce((total, item) => total + item.qty, 0), 0), "已預約教具"]
  ].map(([icon, value, label]) => `<div class="status-card"><span class="status-icon">${icon}</span><div><strong>${value}</strong><span>${label}</span></div></div>`).join("");
  const filtered = bookings.filter(booking => {
    if (state.bookingFilter === "active") return !["completed", "cancelled"].includes(booking.status);
    if (state.bookingFilter === "completed") return booking.status === "completed";
    return true;
  });
  if (!filtered.length) {
    $("#booking-list").innerHTML = `<div class="empty-state"><span>◎</span><h3>目前沒有預約紀錄</h3><p>切換其他分類，或建立一筆新的教具預約。</p></div>`;
    return;
  }
  $("#booking-list").innerHTML = filtered.map(booking => {
    const date = dateFromIso(booking.date);
    const items = booking.items.map(item => `${escapeHtml(item.name)} × ${item.qty}`).join("、");
    const completedClass = ["completed", "cancelled"].includes(booking.status) ? "completed" : "";
    return `<article class="booking-row">
      <div class="booking-date-box"><strong>${date.getDate()}</strong><span>${date.getMonth() + 1} 月 · ${new Intl.DateTimeFormat("zh-TW", { weekday: "short" }).format(date)}</span></div>
      <div class="booking-main"><h3>${escapeHtml(booking.purpose)}</h3><p class="booking-reference">${booking.id}</p><span class="booking-status ${completedClass}">${bookingStatusLabel(booking.status)}</span></div>
      <div class="booking-equipment"><p>${booking.start}–${booking.end} · ${escapeHtml(booking.location)}</p><p>${items}</p></div>
      <div class="booking-actions"><button class="small-button" data-booking-detail="${booking.id}">查看</button>${booking.status === "confirmed" ? `<button class="small-button danger" data-cancel-booking="${booking.id}">取消</button>` : ""}</div>
    </article>`;
  }).join("");
}

function cancelBooking(id) {
  const bookings = getBookings();
  const booking = bookings.find(entry => entry.id === id);
  if (!booking) return;
  booking.status = "cancelled";
  saveBookings(bookings);
  renderBookings();
  renderAllAvailability();
  showToast("預約已取消", `${id} 的庫存時段已釋出。`, false);
}

function showBookingDetail(id) {
  const booking = getBookings().find(entry => entry.id === id);
  if (!booking) return;
  $("#detail-content").innerHTML = `<div class="detail-wrap">
    <button class="modal-close detail-close" data-close-detail aria-label="關閉">×</button>
    <div class="detail-hero"><div><p class="eyebrow">RESERVATION</p><h2>${escapeHtml(booking.purpose)}</h2><p>${booking.id}</p></div><div><p class="booking-status">${bookingStatusLabel(booking.status)}</p><h3>${formatLongDate(booking.date)}<br>${booking.start}–${booking.end}</h3></div></div>
    <div class="detail-body"><div class="detail-specs"><div><span>借用人／單位</span><strong>${escapeHtml(booking.borrower)} · ${escapeHtml(booking.department)}</strong></div><div><span>使用地點</span><strong>${escapeHtml(booking.location)}</strong></div><div><span>教具件數</span><strong>${booking.items.reduce((sum, item) => sum + item.qty, 0)} 件</strong></div></div><div class="detail-note">${booking.items.map(item => `${escapeHtml(item.name)} × ${item.qty}`).join("<br>")}</div></div>
  </div>`;
  $("#detail-modal").showModal();
}

function renderAdmin() {
  const now = new Date();
  $("#admin-date-label").textContent = `${new Intl.DateTimeFormat("zh-TW", { year: "numeric", month: "long", day: "numeric", weekday: "long" }).format(now)}的領取、歸還與庫存狀態。`;
  const activeCount = getBookings().filter(booking => !["completed", "cancelled"].includes(booking.status)).length;
  const metrics = [["今日待領取", 6 + activeCount, "比昨日多 2 筆"], ["今日待歸還", 4, "其中 1 筆於 17:00 到期"], ["目前借用中", 11, "共 19 件教具"], ["可用庫存", "52／62", "3 件維修或清潔中"]];
  $("#metric-grid").innerHTML = metrics.map(([label, value, note]) => `<div class="metric-card"><span>${label}</span><strong>${value}</strong><small>${note}</small></div>`).join("");
  const timeline = [
    ["08:30", "領取", "基本救命術教師訓練", "林志明 · 急診醫學部", "pickup"],
    ["09:00", "領取", "護理技能實作課", "陳雅婷 · 護理部", "pickup"],
    ["11:30", "歸還", "婦產科臨床教學", "蔡怡君 · 婦產部", "return"],
    ["14:00", "領取", "超音波導引穿刺課", "周建宏 · 麻醉部", "pickup"],
    ["16:30", "歸還", "兒科急救模擬訓練", "吳佩珊 · 兒科部", "return"]
  ];
  $("#admin-timeline").innerHTML = timeline.map(([time, type, title, person, kind]) => `<div class="timeline-item"><span class="timeline-time">${time}</span><span class="timeline-track"><i></i></span><div class="timeline-copy"><strong>${title}</strong><span>${person}</span></div><span class="timeline-tag ${kind === "return" ? "return" : ""}">${type}</span></div>`).join("");
  const utilization = [["傷口縫合模型", 86], ["氣管插管練習模型", 74], ["靜脈軟針置入練習模型", 67], ["簡易嬰兒 QCPR", 52]];
  $("#utilization-list").innerHTML = utilization.map(([name, value]) => `<div class="util-row"><div class="util-top"><span>${name}</span><strong>${value}%</strong></div><div class="util-bar"><i style="width:${value}%"></i></div></div>`).join("");
  const attention = [["!", "高級心臟救命術訓練模型", "預計明日保養"], ["◷", "氣胸訓練模型", "歸還後需延長消毒"], ["△", "耳朵檢查模型", "配件庫存待補充"]];
  $("#attention-list").innerHTML = attention.map(([icon, name, note]) => `<div class="attention-item"><span class="attention-icon">${icon}</span><div><strong>${name}</strong><span>${note}</span></div><button>處理</button></div>`).join("");
}

let toastTimer;
function showToast(title, message, success = true) {
  clearTimeout(toastTimer);
  $("#toast-title").textContent = title;
  $("#toast-message").textContent = message;
  $("#toast .toast-icon").textContent = success ? "✓" : "i";
  $("#toast").classList.add("is-visible");
  toastTimer = setTimeout(() => $("#toast").classList.remove("is-visible"), 4500);
}

function switchView(view) {
  $$(".view").forEach(section => section.classList.toggle("is-hidden", section.id !== `${view}-view`));
  $$(".nav-button").forEach(button => button.classList.toggle("is-active", button.dataset.view === view));
  $(".prototype-note").classList.toggle("is-hidden", view !== "catalog" || sessionStorage.getItem("hide-prototype-note") === "1");
  if (view === "bookings") renderBookings();
  if (view === "admin") renderAdmin();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function attachEvents() {
  $$(".nav-button").forEach(button => button.addEventListener("click", () => switchView(button.dataset.view)));
  $$('[data-go-catalog]').forEach(button => button.addEventListener("click", () => switchView("catalog")));
  $("#dismiss-note").addEventListener("click", () => { sessionStorage.setItem("hide-prototype-note", "1"); $(".prototype-note").classList.add("is-hidden"); });
  $("#booking-date").addEventListener("change", event => { clearCartForTimeChange(); state.date = event.target.value; renderAllAvailability(); });
  $("#start-time").addEventListener("change", event => {
    clearCartForTimeChange();
    state.start = event.target.value;
    if (minutes(state.end) <= minutes(state.start)) {
      const next = Math.min(minutes(state.start) + 150, 19 * 60);
      state.end = `${pad(Math.floor(next / 60))}:${pad(next % 60)}`;
      $("#end-time").value = state.end;
    }
    renderAllAvailability();
  });
  $("#end-time").addEventListener("change", event => {
    if (minutes(event.target.value) <= minutes(state.start)) { event.target.value = state.end; return showToast("時間設定無效", "結束時間必須晚於開始時間。", false); }
    clearCartForTimeChange(); state.end = event.target.value; renderAllAvailability();
  });
  $("#week-strip").addEventListener("click", event => {
    const button = event.target.closest("[data-date]");
    if (!button) return;
    clearCartForTimeChange(); state.date = button.dataset.date; $("#booking-date").value = state.date; renderAllAvailability();
  });
  $("#category-tabs").addEventListener("click", event => { const button = event.target.closest("[data-category]"); if (!button) return; state.category = button.dataset.category; renderCategoryTabs(); renderEquipment(); });
  $("#search-input").addEventListener("input", event => { state.query = event.target.value; renderEquipment(); });
  $("#available-only").addEventListener("change", event => { state.availableOnly = event.target.checked; renderEquipment(); });
  $("#sort-button").addEventListener("click", () => { state.sort = state.sort === "id" ? "name" : "id"; $("#sort-button").textContent = state.sort === "id" ? "依編號排序 ↕" : "依名稱排序 ↕"; renderEquipment(); });
  $("#equipment-grid").addEventListener("click", event => {
    const add = event.target.closest("[data-add]"); if (add) return addItem(Number(add.dataset.add));
    const detail = event.target.closest("[data-detail]"); if (detail) showDetail(Number(detail.dataset.detail));
  });
  $("#equipment-grid").addEventListener("keydown", event => { if ((event.key === "Enter" || event.key === " ") && event.target.dataset.detail) showDetail(Number(event.target.dataset.detail)); });
  $("#cart-items").addEventListener("click", event => {
    const remove = event.target.closest("[data-remove]"); if (remove) return removeItem(Number(remove.dataset.remove));
    const decrement = event.target.closest("[data-decrement]"); if (decrement) return changeQuantity(Number(decrement.dataset.decrement), -1);
    const increment = event.target.closest("[data-increment]"); if (increment) changeQuantity(Number(increment.dataset.increment), 1);
  });
  $("#checkout-button").addEventListener("click", showCheckout);
  $("#checkout-form").addEventListener("submit", event => {
    if (event.submitter?.value === "cancel") return;
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    createBooking(new FormData(event.currentTarget));
  });
  $("#detail-modal").addEventListener("click", event => {
    if (event.target.closest("[data-close-detail]")) return $("#detail-modal").close();
    const add = event.target.closest("[data-detail-add]");
    if (add) { addItem(Number(add.dataset.detailAdd)); $("#detail-modal").close(); }
  });
  $("#booking-tabs").addEventListener("click", event => { const button = event.target.closest("[data-booking-filter]"); if (!button) return; state.bookingFilter = button.dataset.bookingFilter; $$("#booking-tabs button").forEach(entry => entry.classList.toggle("is-active", entry === button)); renderBookings(); });
  $("#booking-list").addEventListener("click", event => {
    const cancel = event.target.closest("[data-cancel-booking]"); if (cancel) return cancelBooking(cancel.dataset.cancelBooking);
    const detail = event.target.closest("[data-booking-detail]"); if (detail) showBookingDetail(detail.dataset.bookingDetail);
  });
  $("#mobile-cart-button").addEventListener("click", () => $("#cart-panel").classList.toggle("is-mobile-open"));
  $("#toast button").addEventListener("click", () => $("#toast").classList.remove("is-visible"));
  $$(".admin-actions button, .admin-card button, .profile-button").forEach(button => button.addEventListener("click", () => showToast("初版示範功能", "此項管理操作會在下一階段串接正式資料與權限。", false)));
}

function initialize() {
  seedBookings();
  const today = new Date();
  state.date = isoDate(today);
  $("#booking-date").min = state.date;
  $("#booking-date").value = state.date;
  buildTimeOptions();
  renderAllAvailability();
  renderBookings();
  renderAdmin();
  attachEvents();
}

initialize();
