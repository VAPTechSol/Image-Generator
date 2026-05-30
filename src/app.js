/* ==========================================
   BAPS Bal Mandal Image Generator JS Logic
   ========================================== */

// --- BAPS Bal Mandal Prompt Templates Config ---
const PROMPT_TEMPLATES = [
  {
    id: 0,
    title: "Glass Flow Style",
    styleName: "Glassmorphic Waves",
    icon: "💎",
    templateText: `Create a high-end, premium, kids-friendly, and visually engaging poster design for a kids weekly assembly.

Use a glassmorphism + colorful flowing gradient style with smooth abstract waves and soft glow.

Show different groups of young boys visually performing different activities in separate areas, naturally blended into the background flow. Activities must be understood visually only, not written.

Use dynamic composition with soft blur depth and layered visuals.

Design text using premium glass-style text boxes:
- frosted glass effect
- soft blur background
- light borders
- rounded corners
- layered placement

Gujarati text to include:
બાળસભા
[[mandal] બાળમંડળ]

તારીખ: [date]
વાર: [day]
સમય: [time]
સ્થળ: [venue]

ખાસ આકર્ષણ:
• [attr1]
• [attr2]
• [attr3]

આયોજક:
સ્વામિનારાયણ બાળપ્રવૃત્તિ

Important rules:
1. Gujarati text only
2. No icons
3. No activity text labels
4. Clean, premium, balanced layout
5. Vertical format
6. Soft 3D / premium finish`
  },
  {
    id: 1,
    title: "Gradient Layer Style",
    styleName: "Layered Curves",
    icon: "🌈",
    templateText: `Create a premium, modern, and visually rich poster design for a kids weekly assembly.

Use a layered gradient depth style with multiple smooth curved layers in saffron, cream, and sky blue tones.

Place boys naturally within different layers performing different activities visually. Activities must be shown only through visuals, not written in text.

Design text using layered gradient text boxes:
- soft gradient fills
- rounded edges
- subtle shadows
- depth feel

Gujarati text to include:
બાળસભા
[[mandal] બાળમંડળ]

તારીખ: [date]
વાર: [day]
સમય: [time]
સ્થળ: [venue]

ખાસ આકર્ષણ:
• [attr1]
• [attr2]
• [attr3]

આયોજક:
સ્વામિનારાયણ બાળપ્રવૃત્તિ

Important rules:
1. Gujarati text only
2. No icons
3. No activity text labels
4. Premium layered look
5. Vertical format
6. Clean and balanced composition`
  },
  {
    id: 2,
    title: "Soft 3D Style",
    styleName: "Rounded Platform",
    icon: "🧸",
    templateText: `Create a premium, modern, kids-friendly poster design for a kids weekly assembly using a soft 3D environment style.

Use rounded shapes, floating platforms, and soft lighting to create depth.

Place boys in different areas performing different activities visually. Activities must be shown only through visuals and should not be written anywhere.

Design text using 3D-style floating text boxes:
- rounded shapes
- soft shadows
- floating effect
- smooth gradients

Gujarati text to include:
બાળસભા
[[mandal] બાળમંડળ]

તારીખ: [date]
વાર: [day]
સમય: [time]
સ્થળ: [venue]

ખાસ આકર્ષણ:
• [attr1]
• [attr2]
• [attr3]

આયોજક:
સ્વામિનારાયણ બાળપ્રવૃત્તિ

Important rules:
1. Gujarati text only
2. No icons
3. No activity text labels
4. Soft 3D premium finish
5. Vertical format
6. Clean and professional layout`
  },
  {
    id: 3,
    title: "Ribbon Flow Style",
    styleName: "Flowing Ribbons",
    icon: "🎀",
    templateText: `Create a high-end, premium, kids-friendly, and visually engaging poster design for a kids weekly assembly using a flowing ribbon concept.

Design smooth colorful ribbons moving across the poster in dynamic curves.

Place boys along the ribbon paths performing different activities visually. Activities must be understood through visuals only and should not be labeled in text.

Use soft gradients, glow effects, and decorative elements while keeping the layout clean.

Design text using ribbon-matching creative text boxes:
- curved shapes
- gradient fills
- soft shadows
- balanced spacing

Gujarati text to include:
બાળસભા
[[mandal] બાળમંડળ]

તારીખ: [date]
વાર: [day]
સમય: [time]
સ્થળ: [venue]

ખાસ આકર્ષણ:
• [attr1]
• [attr2]
• [attr3]

આયોજક:
સ્વામિનારાયણ બાળપ્રવૃત્તિ

Important rules:
1. Gujarati text only
2. No icons
3. No activity text labels
4. Decorative but premium
5. Vertical format
6. Clean, flowing composition`
  }
];

// --- Form Placeholders Definition (Shared by all templates) ---
const PLACEHOLDERS = [
  {
    key: "mandal",
    label: "બાળમંડળનું નામ (Mandal Name) *",
    placeholder: "દા.ત. અક્ષરધામ",
    maxlength: 30,
    suggestions: ["અક્ષરધામ", "શાહીબાગ", "Robbinsville", "Sarangpur"]
  },
  {
    key: "date",
    label: "તારીખ (Sabha Date) *",
    placeholder: "દા.ત. ૩૧ મે, ૨૦૨૬",
    maxlength: 30,
    suggestions: ["૩૧ મે, ૨૦૨૬", "૭ જૂન, ૨૦૨૬", "૧૪ જૂન, ૨૦૨૬"]
  },
  {
    key: "day",
    label: "વાર (Sabha Day) *",
    placeholder: "દા.ત. રવિવાર",
    maxlength: 15,
    suggestions: ["રવિવાર", "શનિવાર"]
  },
  {
    key: "time",
    label: "સમય (Sabha Time) *",
    placeholder: "દા.ત. સાંજે ૪:૩૦ થી ૬:૦૦",
    maxlength: 40,
    suggestions: ["સાંજે ૪:૩૦ થી ૬:૦૦", "સવારે ૯:૦૦ થી ૧૦:૩૦"]
  },
  {
    key: "venue",
    label: "સ્થળ (Sabha Venue) *",
    placeholder: "દા.ત. બી.એ.પી.એસ. સ્વામિનારાયણ મંદિર",
    maxlength: 80,
    suggestions: ["બી.એ.પી.એસ. સ્વામિનારાયણ મંદિર સભા હોલ", "બાળ સભા રૂમ"]
  },
  {
    key: "attr1",
    label: "આકર્ષણ ૧ (Attraction 1)",
    placeholder: "દા.ત. ધમાકેદાર ગેમ્સ અને એક્ટિવિટી",
    maxlength: 60,
    suggestions: ["ધમાકેદાર ગેમ્સ અને એક્ટિવિટી", "રસપ્રદ રમત ગમત", "બાળ વાર્તા"]
  },
  {
    key: "attr2",
    label: "આકર્ષણ ૨ (Attraction 2)",
    placeholder: "દા.ત. આનંદદાયક ઓડિયો-વિઝ્યુઅલ શો",
    maxlength: 60,
    suggestions: ["આનંદદાયક ઓડિયો-વિઝ્યુઅલ શો", "પ્રેરણાત્મક વિડીયો શો", "કિર્તન આરાધના"]
  },
  {
    key: "attr3",
    label: "આકર્ષણ ૩ (Attraction 3)",
    placeholder: "દા.ત. રસપ્રદ ક્વિઝ અને ઇનામો",
    maxlength: 60,
    suggestions: ["રસપ્રદ ક્વિઝ અને આકર્ષક ઇનામો", "બાળ શિબિર માહિતી", "પ્રસાદ વિતરણ"]
  }
];

// --- Simple Profanity / Spam Blocklist ---
const BLACKLISTED_WORDS = [
  "http", "https", "www", ".com", ".net", ".org", "casino", "poker", "free cash", "earn money", 
  "crypto", "buy now", "discount", "promo", "sex", "vulgar", "abuse", "damn", "hell", "stupid",
  "hate", "kill", "die", "fight", "bad", "spam", "click here", "subscribe", "hack", "virus",
  "fuck", "ass", "bitch", "bastard"
];

// --- Google Sheets DB Connection URL ---
// Deploy your Google Apps Script as a Web App, copy its exec URL, and paste it here.
// End users will have no visibility or access to this URL on the UI.
const GOOGLE_SHEET_DB_URL = "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE";

// --- Gujarati Date Picker Helpers ---
const GUJARATI_DIGITS = ['૦', '૧', '૨', '૩', '૪', '૫', '૬', '૭', '૮', '૯'];
const GUJARATI_MONTHS = [
  "જાન્યુઆરી", "ફેબ્રુઆરી", "માર્ચ", "એપ્રિલ", "મે", "જૂન", 
  "જુલાઈ", "ઓગસ્ટ", "સપ્ટેમ્બર", "ઓક્ટોબર", "નવેમ્બર", "ડિસેમ્બર"
];

function toGujaratiDigits(numStr) {
  return numStr.toString().split('').map(char => {
    const digit = parseInt(char, 10);
    return isNaN(digit) ? char : GUJARATI_DIGITS[digit];
  }).join('');
}

function formatDatePickerValue(dateVal) {
  if (!dateVal) return "";
  const parts = dateVal.split('-'); // ["2026", "05", "31"]
  if (parts.length !== 3) return "";
  
  const year = parseInt(parts[0], 10);
  const monthIndex = parseInt(parts[1], 10) - 1;
  const day = parseInt(parts[2], 10);
  
  const gujDay = toGujaratiDigits(day);
  const gujMonth = GUJARATI_MONTHS[monthIndex];
  const gujYear = toGujaratiDigits(year);
  
  return `${gujDay} ${gujMonth}, ${gujYear}`;
}

// --- App State ---
let currentTemplateId = 0;
let currentPromptText = "";
let currentImageUrl = "";
let isGenerating = false;
let cooldownTimer = null;
const COOLDOWN_DURATION = 5; // seconds

// --- DOM Elements ---
const creatorNameInput = document.getElementById("creator-name");
const styleSelectorContainer = document.getElementById("style-selector");
const placeholderForm = document.getElementById("placeholder-form");
const btnGenerate = document.getElementById("btn-generate");
const promptOutputBox = document.getElementById("prompt-output-box");
const btnCopyPrompt = document.getElementById("btn-copy-prompt");
const btnGemini = document.getElementById("btn-gemini");
const btnCopyMain = document.getElementById("btn-copy-main");
const btnDownload = document.getElementById("btn-download");

// Preview States
const previewPlaceholderState = document.getElementById("preview-placeholder-state");
const previewLoadingState = document.getElementById("preview-loading-state");
const previewErrorState = document.getElementById("preview-error-state");
const previewResultState = document.getElementById("preview-result-state");
const previewImage = document.getElementById("preview-image");
const errorMessageEl = document.getElementById("error-message");
const btnRetryPreview = document.getElementById("btn-retry-preview");

// History Elements
const historyContainer = document.getElementById("history-container");
const btnClearHistory = document.getElementById("btn-clear-history");



// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  setupStyleSelector();
  renderFormFields();
  loadHistory();
  checkUrlParams();
  
  // Attach Event Listeners
  creatorNameInput.addEventListener("input", validateFormInputs);
  btnGenerate.addEventListener("click", generatePromptAndImage);
  btnCopyPrompt.addEventListener("click", () => copyToClipboard(currentPromptText, "પ્રોમ્પ્ટ કોપી થઈ ગયો છે!"));
  btnGemini.addEventListener("click", copyAndOpenGemini);
  btnCopyMain.addEventListener("click", () => copyToClipboard(currentPromptText, "પ્રોમ્પ્ટ કોપી થઈ ગયો છે!"));
  btnClearHistory.addEventListener("click", clearAllHistory);
  btnRetryPreview.addEventListener("click", generatePromptAndImage);

  // Calendar Trigger Setup
  const btnCalendar = document.getElementById("btn-calendar");
  const datePickerHelper = document.getElementById("date-picker-helper");
  const dateInput = document.getElementById("input-date");
  
  if (btnCalendar && datePickerHelper && dateInput) {
    btnCalendar.addEventListener("click", () => {
      datePickerHelper.showPicker();
    });
    datePickerHelper.addEventListener("change", (e) => {
      const formatted = formatDatePickerValue(e.target.value);
      if (formatted) {
        dateInput.value = formatted;
        buildPromptString();
        validateFormInputs();
        
        // Playful border flash
        dateInput.classList.add("input-filled");
        setTimeout(() => dateInput.classList.remove("input-filled"), 500);
      }
    });
  }
});

// --- Style Selector Setup ---
function setupStyleSelector() {
  styleSelectorContainer.innerHTML = "";
  PROMPT_TEMPLATES.forEach((template, index) => {
    const isActive = index === currentTemplateId;
    const activeClasses = isActive 
      ? "border-orange-500 bg-orange-950/20 text-orange-400 glow-saffron" 
      : "border-slate-800 hover:border-slate-700 bg-slate-950/60 text-slate-300";
      
    const button = document.createElement("button");
    button.className = `flex items-center gap-3 p-3 rounded-xl border text-left transition-all hover:-translate-y-0.5 cursor-pointer ${activeClasses}`;
    button.setAttribute("data-template-id", template.id);
    button.innerHTML = `
      <span class="text-2xl transition-transform duration-300 ${isActive ? 'scale-110 rotate-3' : ''}">${template.icon}</span>
      <div>
        <h3 class="font-bold text-xs md:text-sm text-slate-100">${template.title}</h3>
        <p class="text-[10px] text-slate-400">${template.styleName}</p>
      </div>
    `;
    button.addEventListener("click", () => {
      currentTemplateId = template.id;
      setupStyleSelector();
      buildPromptString();
      validateFormInputs();
    });
    styleSelectorContainer.appendChild(button);
  });
}

// --- Bind and Initialize Form Fields ---
function renderFormFields() {
  PLACEHOLDERS.forEach(placeholder => {
    const input = document.getElementById(`input-${placeholder.key}`);
    const suggestionsContainer = document.getElementById(`suggestions-${placeholder.key}`);
    
    if (!input) return;
    
    // Set default initial values if empty
    if (!input.value) {
      if (placeholder.key === "mandal") input.value = "અક્ષરધામ";
      if (placeholder.key === "date") input.value = "૩૧ મે, ૨૦૨૬";
      if (placeholder.key === "day") input.value = "રવિવાર";
      if (placeholder.key === "time") input.value = "સાંજે ૪:૩૦ થી ૬:૦૦";
      if (placeholder.key === "venue") input.value = "સ્વામિનારાયણ મંદિર, વાડાજ";
      if (placeholder.key === "attr1") input.value = "રસપ્રદ રમત ગમત";
      if (placeholder.key === "attr2") input.value = "";
      if (placeholder.key === "attr3") input.value = "";
    }
    
    // Attach listener for dynamic building & validation
    input.addEventListener("input", () => {
      buildPromptString();
      validateFormInputs();
    });
    input.addEventListener("change", () => {
      buildPromptString();
      validateFormInputs();
    });

    if (suggestionsContainer) {
      suggestionsContainer.innerHTML = "";
      
      const labelSpan = document.createElement("span");
      labelSpan.innerText = "ટ્રાય: ";
      labelSpan.className = "text-[9px] text-slate-500 font-bold self-center mr-1 flex-shrink-0";
      suggestionsContainer.appendChild(labelSpan);

      placeholder.suggestions.forEach(suggestion => {
        const pill = document.createElement("span");
        pill.innerText = suggestion;
        pill.className = "bg-slate-950/80 border border-slate-850 hover:border-slate-700 text-[10px] text-slate-400 px-2 py-0.5 rounded cursor-pointer transition-all hover:bg-slate-900 flex-shrink-0";
        
        pill.addEventListener("click", () => {
          input.value = suggestion;
          buildPromptString();
          validateFormInputs();
          // Playful border animation
          input.classList.add("input-filled");
          setTimeout(() => input.classList.remove("input-filled"), 500);
        });
        suggestionsContainer.appendChild(pill);
      });
    }
  });
  
  // Build prompt immediately
  buildPromptString();
}

// --- Compile Dynamic Prompt String ---
function buildPromptString() {
  const template = PROMPT_TEMPLATES[currentTemplateId];
  let prompt = template.templateText;
  let allFilled = true;
  
  PLACEHOLDERS.forEach(placeholder => {
    const inputEl = document.getElementById(`input-${placeholder.key}`);
    const val = inputEl ? inputEl.value.trim() : "";
    
    // Mandatory checks for first 5 fields
    const isMandatory = ["mandal", "date", "day", "time", "venue"].includes(placeholder.key);
    
    if (val) {
      prompt = prompt.replaceAll(`[${placeholder.key}]`, val);
    } else {
      if (isMandatory) allFilled = false;
      // Replace optional with blank or placeholder
      prompt = prompt.replaceAll(`[${placeholder.key}]`, "");
    }
  });

  if (allFilled && creatorNameInput.value.trim().length >= 3) {
    currentPromptText = prompt;
    promptOutputBox.innerText = prompt;
    promptOutputBox.classList.remove("text-slate-600");
    promptOutputBox.classList.add("text-slate-300");
  } else {
    currentPromptText = "";
    promptOutputBox.innerText = "ડાબી બાજુ તમારું નામ અને વિગતો ભરો એટલે પ્રોમ્પ્ટ અહીં આપોઆપ જનરેટ થશે!";
    promptOutputBox.classList.remove("text-slate-300");
    promptOutputBox.classList.add("text-slate-600");
  }
}

// --- Input Validation (Anti-Spam & Character Filter) ---
function validateFormInputs() {
  const creatorName = creatorNameInput.value.trim();
  
  // Clean Creator name: only letters and spaces
  const cleanCreator = creatorName.replace(/[^a-zA-Z\s]/g, "");
  if (creatorName !== cleanCreator) {
    creatorNameInput.value = cleanCreator;
    showToast("નામમાં માત્ર અક્ષરો અને સ્પેસ જ આવી શકે!", "error");
  }
  
  let isValid = true;
  
  // 1. Check Creator Name length
  if (cleanCreator.length < 3) {
    isValid = false;
  }
  
  // 2. Check each mandatory input
  PLACEHOLDERS.forEach(placeholder => {
    const inputEl = document.getElementById(`input-${placeholder.key}`);
    const val = inputEl ? inputEl.value.trim() : "";
    const isMandatory = ["mandal", "date", "day", "time", "venue"].includes(placeholder.key);
    
    if (isMandatory && val.length < 2) {
      isValid = false;
    }
    
    // Check blocklist terms
    const lowerVal = val.toLowerCase();
    const hasSpam = BLACKLISTED_WORDS.some(word => lowerVal.includes(word));
    if (hasSpam) {
      isValid = false;
      if (inputEl) inputEl.style.borderColor = "#ef4444";
      showToast("મહેરબાની કરી યોગ્ય શબ્દો લખો. સ્પેમ માન્ય નથી!", "error");
    } else if (inputEl) {
      inputEl.style.borderColor = "";
    }
  });

  // Check creator name for blocked words too
  const creatorLower = cleanCreator.toLowerCase();
  if (BLACKLISTED_WORDS.some(word => creatorLower.includes(word))) {
    isValid = false;
    creatorNameInput.style.borderColor = "#ef4444";
    showToast("અમાન્ય નામ!", "error");
  } else {
    creatorNameInput.style.borderColor = "";
  }

  // Handle action buttons disabled state
  const isCooldown = cooldownTimer !== null;
  btnGenerate.disabled = !isValid || isCooldown;
  
  // Disable prompt sharing and Copy if inputs aren't valid
  btnCopyPrompt.disabled = !isValid;
  btnGemini.disabled = !isValid;
  btnCopyMain.disabled = !isValid;
  
  return isValid;
}

// --- AI Generation Trigger (Pollinations AI) ---
function generatePromptAndImage() {
  if (!validateFormInputs() || isGenerating) return;
  
  isGenerating = true;
  
  // Construct stable, cache-busting Pollinations AI prompt for database logging
  const seed = Math.floor(Math.random() * 999999);
  const encodedPrompt = encodeURIComponent(currentPromptText);
  currentImageUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=800&height=800&nologo=true&seed=${seed}`;
  
  isGenerating = false;
  
  // Save to History Log (localStorage)
  saveToHistory();
  showToast("પ્રોમ્પ્ટ સફળતાપૂર્વક તૈયાર થઈ ગયો છે! ✨", "success");
  
  // Smooth scroll to output section on mobile/tablet screens
  if (window.innerWidth < 1024) {
    const outputSec = document.getElementById("output-section");
    if (outputSec) {
      outputSec.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
  
  // Send to Google Sheet if Web App URL is present
  sendToGoogleSheets(creatorNameInput.value.trim(), PROMPT_TEMPLATES[currentTemplateId].title, currentPromptText, currentImageUrl);
  
  // Trigger anti-spam rate limiting cooldown
  startCooldown();
}

// --- Cooldown Rate Limiter ---
function startCooldown() {
  let countdown = COOLDOWN_DURATION;
  btnGenerate.disabled = true;
  
  cooldownTimer = setInterval(() => {
    countdown--;
    btnGenerate.querySelector(".btn-text").innerText = `થોડીવાર થોભો (${countdown}s)`;
    
    if (countdown <= 0) {
      clearInterval(cooldownTimer);
      cooldownTimer = null;
      btnGenerate.querySelector(".btn-text").innerText = "પ્રોમ્પ્ટ જનરેટ અને સેવ કરો";
      validateFormInputs(); // re-evaluates and enables if form valid
    }
  }, 1000);
}

// --- Copy & Open Gemini Logic ---
function copyAndOpenGemini() {
  if (!currentPromptText) return;
  
  // Copy to clipboard
  navigator.clipboard.writeText(currentPromptText).then(() => {
    showToast("પ્રોમ્પ્ટ કોપી થઈ ગયો છે! જેમિની ઓપન થઈ રહ્યું છે...", "success");
    
    // Delay slightly for user feedback, then open Gemini in a new tab
    setTimeout(() => {
      window.open("https://gemini.google.com/app", "_blank");
    }, 800);
  }).catch(err => {
    console.error("Failed to copy: ", err);
    showToast("કોપી કરવામાં મુશ્કેલી પડી.", "error");
  });
}

// --- Clipboard Helper ---
function copyToClipboard(text, successMsg) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(successMsg, "success");
  }).catch(() => {
    showToast("ક્લિપબોર્ડ એક્સેસ રિજેક્ટ થયો.", "error");
  });
}

// --- Share Link Generator ---
function generateShareLink() {
  const creator = creatorNameInput.value.trim();
  const template = PROMPT_TEMPLATES[currentTemplateId];
  
  const inputs = {};
  PLACEHOLDERS.forEach(placeholder => {
    const val = document.getElementById(`input-${placeholder.key}`).value.trim();
    inputs[placeholder.key] = val;
  });
  
  // Build URL parameters
  const origin = window.location.origin;
  const pathname = window.location.pathname;
  const params = new URLSearchParams();
  params.set("creator", creator);
  params.set("template", currentTemplateId);
  params.set("inputs", JSON.stringify(inputs));
  
  const shareLink = `${origin}${pathname}?${params.toString()}`;
  
  copyToClipboard(shareLink, "લિંક કોપી થઈ ગઈ છે! તમારા બાળ મિત્રો સાથે શેર કરો.");
}

// --- Query Parameter Parser (Link Loader) ---
function checkUrlParams() {
  const params = new URLSearchParams(window.location.search);
  const creator = params.get("creator");
  const templateId = params.get("template");
  const inputsJson = params.get("inputs");
  
  if (creator && templateId !== null && inputsJson) {
    try {
      const inputs = JSON.parse(inputsJson);
      
      // Load name
      creatorNameInput.value = creator;
      
      // Select correct template style
      currentTemplateId = parseInt(templateId, 10);
      setupStyleSelector();
      
      // Pre-fill fields
      Object.keys(inputs).forEach(key => {
        const inputEl = document.getElementById(`input-${key}`);
        if (inputEl) {
          inputEl.value = inputs[key];
        }
      });
      
      // Compile & Validate
      buildPromptString();
      const isValid = validateFormInputs();
      
      showToast(`${creator} દ્વારા મોકલાયેલો પ્રોમ્પ્ટ લોડ થઈ રહ્યો છે...`, "info");
      
      // Automatically generate preview
      if (isValid) {
        setTimeout(generatePromptAndImage, 600);
      }
    } catch (e) {
      console.error("Error parsing shared link inputs", e);
    }
  }
}

// --- Toast Notification Hub ---
function showToast(message, type = "success") {
  const toastContainer = document.getElementById("toast-container");
  
  const toast = document.createElement("div");
  toast.className = "flex items-center gap-3 bg-slate-900 border rounded-xl px-5 py-3 shadow-2xl transition-all duration-300 pointer-events-auto transform translate-y-0 opacity-100";
  
  // Icon and border color mappings
  let iconClass = "bg-orange-500/10 text-orange-400";
  let borderClass = "border-orange-500/50";
  let iconSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
    </svg>`;
    
  if (type === "error") {
    iconClass = "bg-red-500/10 text-red-400";
    borderClass = "border-red-500/50";
    iconSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
      </svg>`;
  } else if (type === "info") {
    iconClass = "bg-sky-500/10 text-sky-400";
    borderClass = "border-sky-500/50";
    iconSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
      </svg>`;
  }
  
  toast.classList.add(borderClass);
  
  toast.innerHTML = `
    <span class="h-8 w-8 rounded-full flex items-center justify-center ${iconClass}">
      ${iconSVG}
    </span>
    <div>
      <p class="text-xs font-bold text-slate-100">${message}</p>
      <p class="text-[9px] text-slate-400">બી.એ.પી.એસ. બાળસભા એપ</p>
    </div>
  `;
  
  toastContainer.appendChild(toast);
  
  // Auto-remove after 3.5 seconds
  setTimeout(() => {
    toast.classList.remove("translate-y-0", "opacity-100");
    toast.classList.add("translate-y-12", "opacity-0");
    toast.addEventListener("transitionend", () => {
      toast.remove();
    });
  }, 3500);
}

// --- Local Storage History Log ---
function saveToHistory() {
  const creator = creatorNameInput.value.trim();
  
  const inputs = {};
  PLACEHOLDERS.forEach(placeholder => {
    inputs[placeholder.key] = document.getElementById(`input-${placeholder.key}`).value.trim();
  });
  
  const historyItem = {
    id: Date.now(),
    creator: creator,
    templateId: currentTemplateId,
    prompt: currentPromptText,
    imageUrl: currentImageUrl,
    inputs: inputs,
    timeString: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  };
  
  let history = JSON.parse(localStorage.getItem("baps_mandal_history")) || [];
  
  // Prevent duplicate saves of identical prompts
  const isDuplicate = history.length > 0 && history[0].prompt === currentPromptText;
  if (!isDuplicate) {
    history.unshift(historyItem);
    if (history.length > 10) history.pop();
    
    localStorage.setItem("baps_mandal_history", JSON.stringify(history));
    renderHistoryList();
  }
}

function loadHistory() {
  renderHistoryList();
}

function renderHistoryList() {
  const history = JSON.parse(localStorage.getItem("baps_mandal_history")) || [];
  historyContainer.innerHTML = "";
  
  if (history.length === 0) {
    historyContainer.innerHTML = `
      <div class="flex flex-col items-center justify-center py-6 text-center text-slate-600 gap-1.5">
        <i class="fa-solid fa-seedling text-xl opacity-60"></i>
        <p class="text-[10px] font-bold">બનાવેલા પ્રોમ્પ્ટ્સની વિગત અહીં સંગ્રહ થશે!</p>
      </div>
    `;
    return;
  }
  
  history.forEach(item => {
    const template = PROMPT_TEMPLATES[item.templateId];
    const itemDiv = document.createElement("div");
    itemDiv.className = "flex items-center justify-between gap-3 p-3 bg-slate-950/60 border border-slate-900 rounded-xl hover:border-slate-800 transition-all";
    itemDiv.innerHTML = `
      <div class="flex flex-col min-w-0 flex-grow gap-0.5">
        <div class="flex items-center gap-2 text-[10px]">
          <span class="font-extrabold text-orange-400">${item.creator}</span>
          <span class="text-slate-600 font-medium">${item.timeString}</span>
        </div>
        <div class="text-[11px] text-slate-300 font-semibold truncate">${template.icon} ${item.prompt}</div>
      </div>
      <div class="flex items-center gap-1.5 flex-shrink-0">
        <button class="btn-use p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 transition-all hover:bg-slate-850" title="પ્રોમ્પ્ટ લોડ કરો">
          <i class="fa-solid fa-arrows-rotate text-xs"></i>
        </button>
        <button class="btn-delete p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-500 hover:text-red-400 transition-all hover:bg-slate-850" title="કાર્ડ કાઢી નાખો">
          <i class="fa-solid fa-trash-can text-xs"></i>
        </button>
      </div>
    `;
    
    // Attach load button listener
    itemDiv.querySelector(".btn-use").addEventListener("click", () => {
      creatorNameInput.value = item.creator;
      currentTemplateId = item.templateId;
      setupStyleSelector();
      
      // Load individual inputs
      Object.keys(item.inputs).forEach(key => {
        const inputEl = document.getElementById(`input-${key}`);
        if (inputEl) {
          inputEl.value = item.inputs[key];
        }
      });
      
      buildPromptString();
      validateFormInputs();
      showToast("પ્રોમ્પ્ટ લોડ થઈ ગયો છે!", "info");
    });
    
    // Attach delete button listener
    itemDiv.querySelector(".btn-delete").addEventListener("click", () => {
      deleteHistoryItem(item.id);
    });
    
    historyContainer.appendChild(itemDiv);
  });
}

function deleteHistoryItem(id) {
  let history = JSON.parse(localStorage.getItem("baps_mandal_history")) || [];
  history = history.filter(item => item.id !== id);
  localStorage.setItem("baps_mandal_history", JSON.stringify(history));
  renderHistoryList();
  showToast("યાદીમાંથી કાઢી નાખવામાં આવ્યું.", "info");
}

function clearAllHistory() {
  if (confirm("શું તમે આ ઇતિહાસ કાઢી નાખવા માંગો છો?")) {
    localStorage.removeItem("baps_mandal_history");
    renderHistoryList();
    showToast("ઇતિહાસ સાફ કરવામાં આવ્યો છે!", "info");
  }
}

// --- Google Sheets Sync Dispatcher ---
function sendToGoogleSheets(creator, style, prompt, imageUrl) {
  if (!GOOGLE_SHEET_DB_URL || GOOGLE_SHEET_DB_URL === "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE") return; 
  
  const inputs = {};
  PLACEHOLDERS.forEach(placeholder => {
    const inputEl = document.getElementById(`input-${placeholder.key}`);
    inputs[placeholder.key] = inputEl ? inputEl.value.trim() : "";
  });
  
  fetch(GOOGLE_SHEET_DB_URL, {
    method: "POST",
    mode: "no-cors", 
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      creator: creator,
      style: style,
      prompt: prompt,
      imageUrl: imageUrl,
      inputs: inputs
    })
  }).then(() => {
    console.log("Logged to Google Sheets successfully.");
  }).catch(err => {
    console.error("Error logging to Google Sheets:", err);
  });
}
