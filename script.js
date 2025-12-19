// DOM Elements
const taskList = document.getElementById('taskList');
const emptyState = document.getElementById('emptyState');
const addTaskBtn = document.getElementById('addTaskBtn');
const totalTasksEl = document.getElementById('totalTasks');
const activeTimersEl = document.getElementById('activeTimers');
const completedTasksEl = document.getElementById('completedTasks');
const installButton = document.getElementById('installButton');
const installBanner = document.getElementById('installBanner');
const bannerInstallBtn = document.getElementById('bannerInstallBtn');
const closeBannerBtn = document.getElementById('closeBannerBtn');
const taskCategory = document.getElementById('taskCategory');
const subjectSelection = document.getElementById('subjectSelection');
const subject = document.getElementById('subject');
const unitsSelection = document.getElementById('unitsSelection');
const unitsGrid = document.getElementById('unitsGrid');
const unitsSelectionTitle = document.getElementById('unitsSelectionTitle');

// Developer elements
const devDashboard = document.getElementById('devDashboard');
const devAccessBtn = document.getElementById('devAccessBtn');
const appTitle = document.getElementById('appTitle');
const devIndicator = document.getElementById('devIndicator');
const loginModal = document.getElementById('loginModal');
const devPassword = document.getElementById('devPassword');
const loginBtn = document.getElementById('loginBtn');
const loginError = document.getElementById('loginError');
const closeDevDashboard = document.getElementById('closeDevDashboard');

// Developer management elements
const subjectTabs = document.getElementById('subjectTabs');
const currentSubjectTitle = document.getElementById('currentSubjectTitle');
const currentSubjectDescription = document.getElementById('currentSubjectDescription');
const currentSubjectName = document.getElementById('currentSubjectName');
const unitManagerList = document.getElementById('unitManagerList');
const newUnitCode = document.getElementById('newUnitCode');
const newUnitName = document.getElementById('newUnitName');
const addUnitBtn = document.getElementById('addUnitBtn');
const resetUnitsBtn = document.getElementById('resetUnitsBtn');
const resetAllSubjectsBtn = document.getElementById('resetAllSubjectsBtn');
const newSubjectId = document.getElementById('newSubjectId');
const newSubjectName = document.getElementById('newSubjectName');
const newSubjectColor = document.getElementById('newSubjectColor');
const addSubjectBtn = document.getElementById('addSubjectBtn');
const enableAudio = document.getElementById('enableAudio');
const enableVoice = document.getElementById('enableVoice');
const testAudioBtn = document.getElementById('testAudioBtn');
const clearAllTasksBtn = document.getElementById('clearAllTasksBtn');
const exportDataBtn = document.getElementById('exportDataBtn');
const importDataBtn = document.getElementById('importDataBtn');
const resetAppBtn = document.getElementById('resetAppBtn');

// Time's up notification
const timeUpNotification = document.getElementById('timeUpNotification');
const timeUpMessage = document.getElementById('timeUpMessage');
const closeNotificationBtn = document.getElementById('closeNotificationBtn');

// Developer password (Change this to your own secure password)
const DEVELOPER_PASSWORD = "admin123";

// Default subjects data with units
const defaultSubjects = {
    microbiology: {
        name: "Microbiology",
        color: "#7209b7",
        icon: "fas fa-microscope",
        units: [
            { code: 'SMB100', name: 'Introduction to Microbiology', icon: 'fas fa-book' },
            { code: 'SMB108', name: 'Microbial Physiology and Genetics', icon: 'fas fa-dna' },
            { code: 'SMB105', name: 'Immunology and Serology', icon: 'fas fa-shield-virus' },
            { code: 'SMB103', name: 'Medical Bacteriology', icon: 'fas fa-bacteria' },
            { code: 'SMB101', name: 'Virology and Mycology', icon: 'fas fa-virus' },
            { code: 'UCU110', name: 'Communication Skills', icon: 'fas fa-comments' }
        ]
    },
    computer_science: {
        name: "Computer Science",
        color: "#06d6a0",
        icon: "fas fa-laptop-code",
        units: [
            { code: 'CSC101', name: 'Introduction to Programming', icon: 'fas fa-code' },
            { code: 'CSC102', name: 'Data Structures', icon: 'fas fa-project-diagram' },
            { code: 'CSC103', name: 'Algorithms', icon: 'fas fa-brain' },
            { code: 'CSC104', name: 'Database Systems', icon: 'fas fa-database' },
            { code: 'CSC105', name: 'Web Development', icon: 'fas fa-globe' },
            { code: 'CSC106', name: 'Software Engineering', icon: 'fas fa-cogs' }
        ]
    },
    biology: {
        name: "Biology",
        color: "#ffd166",
        icon: "fas fa-dna",
        units: [
            { code: 'BIO101', name: 'Cell Biology', icon: 'fas fa-microscope' },
            { code: 'BIO102', name: 'Genetics', icon: 'fas fa-dna' },
            { code: 'BIO103', name: 'Ecology', icon: 'fas fa-leaf' },
            { code: 'BIO104', name: 'Evolution', icon: 'fas fa-fish' },
            { code: 'BIO105', name: 'Anatomy & Physiology', icon: 'fas fa-heartbeat' },
            { code: 'BIO106', name: 'Biochemistry', icon: 'fas fa-flask' }
        ]
    },
    chemistry: {
        name: "Chemistry",
        color: "#ef476f",
        icon: "fas fa-flask",
        units: [
            { code: 'CHE101', name: 'General Chemistry', icon: 'fas fa-flask' },
            { code: 'CHE102', name: 'Organic Chemistry', icon: 'fas fa-atom' },
            { code: 'CHE103', name: 'Inorganic Chemistry', icon: 'fas fa-vial' },
            { code: 'CHE104', name: 'Physical Chemistry', icon: 'fas fa-temperature-high' },
            { code: 'CHE105', name: 'Analytical Chemistry', icon: 'fas fa-chart-line' },
            { code: 'CHE106', name: 'Biochemistry', icon: 'fas fa-dna' }
        ]
    },
    physics: {
        name: "Physics",
        color: "#118ab2",
        icon: "fas fa-atom",
        units: [
            { code: 'PHY101', name: 'Mechanics', icon: 'fas fa-weight-hanging' },
            { code: 'PHY102', name: 'Electromagnetism', icon: 'fas fa-bolt' },
            { code: 'PHY103', name: 'Thermodynamics', icon: 'fas fa-thermometer-half' },
            { code: 'PHY104', name: 'Quantum Mechanics', icon: 'fas fa-atom' },
            { code: 'PHY105', name: 'Optics', icon: 'fas fa-lightbulb' },
            { code: 'PHY106', name: 'Nuclear Physics', icon: 'fas fa-radiation' }
        ]
    },
    mathematics: {
        name: "Mathematics",
        color: "#073b4c",
        icon: "fas fa-calculator",
        units: [
            { code: 'MAT101', name: 'Calculus I', icon: 'fas fa-infinity' },
            { code: 'MAT102', name: 'Calculus II', icon: 'fas fa-chart-area' },
            { code: 'MAT103', name: 'Linear Algebra', icon: 'fas fa-border-all' },
            { code: 'MAT104', name: 'Discrete Mathematics', icon: 'fas fa-project-diagram' },
            { code: 'MAT105', name: 'Statistics', icon: 'fas fa-chart-bar' },
            { code: 'MAT106', name: 'Differential Equations', icon: 'fas fa-function' }
        ]
    }
};

// Variables for PWA installation
let deferredPrompt;

// App state
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let activeTimers = 0;
let selectedSubject = '';
let selectedUnit = '';
let isDeveloperMode = localStorage.getItem('devMode') === 'true';
let subjectsData = JSON.parse(localStorage.getItem('subjectsData')) || defaultSubjects;
let audioEnabled = localStorage.getItem('audioEnabled') !== 'false'; // Default to true
let voiceEnabled = localStorage.getItem('voiceEnabled') !== 'false'; // Default to true
let currentDevSubject = 'microbiology'; // Currently selected subject in developer dashboard

// Audio elements for alerts
let audioContext;
let alarmSound;
let speechSynthesis = window.speechSynthesis;
let voices = [];

// Initialize the app
function init() {
    renderTasks();
    updateStats();
    setupEventListeners();
    checkPWAInstallable();
    populateSubjectDropdown();
    updateAllSubjectInfo();
    loadDeveloperSettings();
    setupDeveloperMode();
    loadVoices();
    populateSubjectTabs();
    updateDevSubjectInfo();
    
    // Initialize audio context (will be resumed on user interaction)
    if (audioEnabled) {
        initAudio();
    }
}

// Load developer settings from localStorage
function loadDeveloperSettings() {
    enableAudio.checked = audioEnabled;
    enableVoice.checked = voiceEnabled;
}

// Initialize audio
function initAudio() {
    try {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        createAlarmSound();
    } catch (e) {
        console.log("Web Audio API not supported in this browser");
        audioEnabled = false;
        enableAudio.checked = false;
    }
}

// Create alarm sound
function createAlarmSound() {
    if (!audioContext) return;
    
    // Create oscillator for beep sound
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    
    alarmSound = { oscillator, gainNode };
}

// Play alarm sound
function playAlarmSound() {
    if (!audioEnabled || !alarmSound || !audioContext) return;
    
    try {
        // Resume audio context if suspended (required by browsers)
        if (audioContext.state === 'suspended') {
            audioContext.resume();
        }
        
        alarmSound.oscillator.start();
        alarmSound.gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 2);
        alarmSound.oscillator.stop(audioContext.currentTime + 2);
        
        // Recreate the sound for next time
        setTimeout(createAlarmSound, 2100);
    } catch (e) {
        console.log("Error playing alarm sound:", e);
    }
}

// Load available voices for speech synthesis
function loadVoices() {
    voices = speechSynthesis.getVoices();
    
    // Try to find a female voice
    let femaleVoice = voices.find(voice => 
        voice.name.includes('Female') || 
        voice.name.includes('woman') || 
        voice.name.includes('Woman') ||
        voice.lang.includes('en-US')
    );
    
    // If no female voice found, use the first available voice
    if (!femaleVoice && voices.length > 0) {
        femaleVoice = voices[0];
    }
    
    return femaleVoice;
}

// Speak a message
function speakMessage(message, times = 1) {
    if (!voiceEnabled || !speechSynthesis) return;
    
    // Cancel any ongoing speech
    speechSynthesis.cancel();
    
    // Create speech utterance
    const utterance = new SpeechSynthesisUtterance(message);
    
    // Try to set a female voice
    const femaleVoice = loadVoices();
    if (femaleVoice) {
        utterance.voice = femaleVoice;
    }
    
    utterance.rate = 0.9; // Slightly slower
    utterance.pitch = 1.2; // Slightly higher pitch (more feminine)
    utterance.volume = 1;
    
    // Speak multiple times
    for (let i = 0; i < times; i++) {
        // Add delay between repetitions
        if (i > 0) {
            setTimeout(() => {
                speechSynthesis.speak(utterance);
            }, i * 1500);
        } else {
            speechSynthesis.speak(utterance);
        }
    }
}

// Show time's up notification
function showTimeUpNotification(taskTitle) {
    timeUpMessage.textContent = `"${taskTitle}" timer has completed!`;
    timeUpNotification.style.display = 'flex';
    
    // Play alarm sound
    if (audioEnabled) {
        playAlarmSound();
    }
    
    // Speak message three times
    if (voiceEnabled) {
        speakMessage("Your time is up! Your time is up! Your time is up!", 1);
    }
}

// Set up developer mode
function setupDeveloperMode() {
    if (isDeveloperMode) {
        devAccessBtn.style.display = 'flex';
        devIndicator.style.display = 'block';
    }
    
    // Secret code to show developer access: triple click on app title
    let clickCount = 0;
    let clickTimer;
    
    appTitle.addEventListener('click', function() {
        clickCount++;
        
        if (clickCount === 1) {
            clickTimer = setTimeout(() => {
                clickCount = 0;
            }, 500);
        } else if (clickCount === 3) {
            clearTimeout(clickTimer);
            clickCount = 0;
            
            if (!isDeveloperMode) {
                loginModal.style.display = 'flex';
            } else {
                devDashboard.style.display = 'block';
            }
        }
    });
}

// Populate subject dropdown in the main form
function populateSubjectDropdown() {
    subject.innerHTML = '<option value="">Select a subject...</option>';
    
    Object.keys(subjectsData).forEach(subjectId => {
        const subjectData = subjectsData[subjectId];
        const option = document.createElement('option');
        option.value = subjectId;
        option.textContent = subjectData.name;
        subject.appendChild(option);
    });
    
    // Add "Other" option
    const otherOption = document.createElement('option');
    otherOption.value = 'other';
    otherOption.textContent = 'Other Subject';
    subject.appendChild(otherOption);
}

// Update all subject info panels
function updateAllSubjectInfo() {
    Object.keys(subjectsData).forEach(subjectId => {
        const subjectData = subjectsData[subjectId];
        const unitListElement = document.getElementById(`${subjectId}UnitList`);
        
        if (unitListElement) {
            unitListElement.innerHTML = '';
            subjectData.units.forEach(unit => {
                const li = document.createElement('li');
                li.innerHTML = `<strong>${unit.code}</strong> - ${unit.name}`;
                unitListElement.appendChild(li);
            });
        }
    });
}

// Populate subject tabs in developer dashboard
function populateSubjectTabs() {
    subjectTabs.innerHTML = '';
    
    Object.keys(subjectsData).forEach(subjectId => {
        const subjectData = subjectsData[subjectId];
        const tab = document.createElement('button');
        tab.className = `subject-tab ${subjectId} ${subjectId === currentDevSubject ? 'active' : ''}`;
        tab.textContent = subjectData.name;
        tab.style.backgroundColor = subjectData.color;
        tab.dataset.subjectId = subjectId;
        
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            document.querySelectorAll('.subject-tab').forEach(t => {
                t.classList.remove('active');
            });
            
            // Add active class to clicked tab
            this.classList.add('active');
            currentDevSubject = subjectId;
            updateDevSubjectInfo();
            populateUnitManager();
        });
        
        subjectTabs.appendChild(tab);
    });
}

// Update developer subject info
function updateDevSubjectInfo() {
    const subjectData = subjectsData[currentDevSubject];
    if (!subjectData) return;
    
    currentSubjectTitle.textContent = `${subjectData.name} Units`;
    currentSubjectTitle.innerHTML = `<i class="${subjectData.icon}"></i> ${subjectData.name} Units`;
    currentSubjectDescription.textContent = `Manage units for ${subjectData.name} subject.`;
    currentSubjectName.textContent = subjectData.name;
    
    // Update add button color
    addUnitBtn.style.backgroundColor = subjectData.color;
}

// Populate unit manager list in developer dashboard
function populateUnitManager() {
    unitManagerList.innerHTML = '';
    const subjectData = subjectsData[currentDevSubject];
    
    if (!subjectData || !subjectData.units) return;
    
    subjectData.units.forEach(unit => {
        const unitItem = document.createElement('div');
        unitItem.className = 'unit-manager-item';
        unitItem.innerHTML = `
            <div>
                <div class="unit-manager-code" style="color: ${subjectData.color}">${unit.code}</div>
                <div class="unit-manager-name">${unit.name}</div>
            </div>
            <button class="remove-unit-btn" data-code="${unit.code}">
                <i class="fas fa-trash"></i> Remove
            </button>
        `;
        
        unitManagerList.appendChild(unitItem);
    });
    
    // Add event listeners to remove buttons
    document.querySelectorAll('.remove-unit-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const unitCode = this.dataset.code;
            removeUnit(unitCode);
        });
    });
}

// Populate units grid for selected subject in main form
function populateUnitsGrid(subjectId) {
    unitsGrid.innerHTML = '';
    const subjectData = subjectsData[subjectId];
    
    if (!subjectData || !subjectData.units) return;
    
    unitsSelectionTitle.innerHTML = `<i class="${subjectData.icon}"></i> Select ${subjectData.name} Unit`;
    
    subjectData.units.forEach(unit => {
        const unitCard = document.createElement('div');
        unitCard.className = 'unit-card';
        unitCard.dataset.code = unit.code;
        unitCard.style.borderColor = subjectData.color;
        unitCard.innerHTML = `
            <i class="${unit.icon}"></i>
            <div>${unit.code}</div>
        `;
        
        unitCard.addEventListener('click', function() {
            // Remove selected class from all unit cards
            document.querySelectorAll('.unit-card').forEach(card => {
                card.classList.remove('selected');
            });
            
            // Add selected class to clicked card
            this.classList.add('selected');
            this.style.backgroundColor = subjectData.color;
            selectedUnit = unit.code;
            
            // Auto-fill task title with unit name
            document.getElementById('taskTitle').value = `Study ${unit.code}: ${unit.name}`;
        });
        
        unitCard.addEventListener('mouseover', function() {
            if (!this.classList.contains('selected')) {
                this.style.borderColor = subjectData.color;
            }
        });
        
        unitCard.addEventListener('mouseout', function() {
            if (!this.classList.contains('selected')) {
                this.style.borderColor = '#e0e0e0';
            }
        });
        
        unitsGrid.appendChild(unitCard);
    });
}

// Set up event listeners
function setupEventListeners() {
    addTaskBtn.addEventListener('click', addTask);
    
    // Category change listener
    taskCategory.addEventListener('change', function() {
        if (this.value === 'learning') {
            subjectSelection.style.display = 'block';
        } else {
            subjectSelection.style.display = 'none';
            unitsSelection.style.display = 'none';
            hideAllSubjectInfo();
            selectedSubject = '';
            selectedUnit = '';
        }
    });
    
    // Subject change listener
    subject.addEventListener('change', function() {
        const subjectId = this.value;
        
        // Hide all subject info panels
        hideAllSubjectInfo();
        
        if (subjectId === 'other') {
            unitsSelection.style.display = 'none';
            selectedSubject = 'other';
            selectedUnit = '';
        } else if (subjectId && subjectsData[subjectId]) {
            unitsSelection.style.display = 'block';
            selectedSubject = subjectId;
            selectedUnit = '';
            populateUnitsGrid(subjectId);
            
            // Show subject info panel
            const subjectInfoElement = document.getElementById(`${subjectId}Info`);
            if (subjectInfoElement) {
                subjectInfoElement.style.display = 'block';
            }
        } else {
            unitsSelection.style.display = 'none';
            selectedSubject = '';
            selectedUnit = '';
        }
    });
    
    // Developer access button
    devAccessBtn.addEventListener('click', function() {
        devDashboard.style.display = 'block';
    });
    
    // Developer login
    loginBtn.addEventListener('click', function() {
        if (devPassword.value === DEVELOPER_PASSWORD) {
            isDeveloperMode = true;
            localStorage.setItem('devMode', 'true');
            devAccessBtn.style.display = 'flex';
            devIndicator.style.display = 'block';
            loginModal.style.display = 'none';
            devDashboard.style.display = 'block';
            devPassword.value = '';
            loginError.style.display = 'none';
        } else {
            loginError.style.display = 'block';
            devPassword.value = '';
        }
    });
    
    // Close developer dashboard
    closeDevDashboard.addEventListener('click', function() {
        devDashboard.style.display = 'none';
    });
    
    // Close time's up notification
    closeNotificationBtn.addEventListener('click', function() {
        timeUpNotification.style.display = 'none';
    });
    
    // Unit management
    addUnitBtn.addEventListener('click', addNewUnit);
    resetUnitsBtn.addEventListener('click', resetCurrentSubjectUnits);
    resetAllSubjectsBtn.addEventListener('click', resetAllSubjects);
    
    // Add new subject
    addSubjectBtn.addEventListener('click', addNewSubject);
    
    // Audio settings
    enableAudio.addEventListener('change', function() {
        audioEnabled = this.checked;
        localStorage.setItem('audioEnabled', audioEnabled);
        
        if (audioEnabled && !audioContext) {
            initAudio();
        }
    });
    
    enableVoice.addEventListener('change', function() {
        voiceEnabled = this.checked;
        localStorage.setItem('voiceEnabled', voiceEnabled);
    });
    
    testAudioBtn.addEventListener('click', function() {
        showTimeUpNotification("Test Task");
    });
    
    // Developer actions
    clearAllTasksBtn.addEventListener('click', clearAllTasks);
    exportDataBtn.addEventListener('click', exportData);
    importDataBtn.addEventListener('click', importData);
    resetAppBtn.addEventListener('click', resetApp);
    
    // PWA installation events
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        
        // Show install button
        installButton.style.display = 'flex';
        installButton.addEventListener('click', installPWA);
        
        // Show banner after 5 seconds
        setTimeout(() => {
            installBanner.classList.add('show');
        }, 5000);
    });
    
    bannerInstallBtn.addEventListener('click', installPWA);
    closeBannerBtn.addEventListener('click', () => {
        installBanner.classList.remove('show');
    });
    
    // Listen for app installed event
    window.addEventListener('appinstalled', () => {
        installButton.style.display = 'none';
        installBanner.classList.remove('show');
        deferredPrompt = null;
        alert('Task Timer app installed successfully!');
    });
    
    // Listen for voice synthesis voices loaded
    speechSynthesis.addEventListener('voiceschanged', loadVoices);
}

// Hide all subject info panels
function hideAllSubjectInfo() {
    document.querySelectorAll('.subject-info').forEach(element => {
        element.style.display = 'none';
    });
}

// Add a new unit to current subject
function addNewUnit() {
    const code = newUnitCode.value.trim().toUpperCase();
    const name = newUnitName.value.trim();
    
    if (!code || !name) {
        alert('Please enter both unit code and name');
        return;
    }
    
    const subjectData = subjectsData[currentDevSubject];
    if (!subjectData) return;
    
    // Check if unit already exists
    if (subjectData.units.some(unit => unit.code === code)) {
        alert(`Unit ${code} already exists in ${subjectData.name}`);
        return;
    }
    
    // Add new unit
    subjectData.units.push({
        code,
        name,
        icon: 'fas fa-book' // Default icon
    });
    
    // Save to localStorage
    localStorage.setItem('subjectsData', JSON.stringify(subjectsData));
    
    // Update UI
    populateUnitManager();
    updateAllSubjectInfo();
    
    // If this subject is currently selected in the main form, update units grid
    if (selectedSubject === currentDevSubject) {
        populateUnitsGrid(currentDevSubject);
    }
    
    // Clear inputs
    newUnitCode.value = '';
    newUnitName.value = '';
    
    alert(`Unit ${code} added to ${subjectData.name} successfully!`);
}

// Remove a unit from current subject
function removeUnit(unitCode) {
    const subjectData = subjectsData[currentDevSubject];
    if (!subjectData) return;
    
    if (!confirm(`Are you sure you want to remove unit ${unitCode} from ${subjectData.name}?`)) {
        return;
    }
    
    // Remove unit from array
    subjectData.units = subjectData.units.filter(unit => unit.code !== unitCode);
    
    // Save to localStorage
    localStorage.setItem('subjectsData', JSON.stringify(subjectsData));
    
    // Update UI
    populateUnitManager();
    updateAllSubjectInfo();
    
    // If this subject is currently selected in the main form, update units grid
    if (selectedSubject === currentDevSubject) {
        populateUnitsGrid(currentDevSubject);
    }
    
    // If any tasks use this unit, update them
    tasks.forEach(task => {
        if (task.subject === currentDevSubject && task.unit === unitCode) {
            task.unit = '';
        }
    });
    saveTasks();
    renderTasks();
    
    alert(`Unit ${unitCode} removed from ${subjectData.name} successfully!`);
}

// Reset current subject units to default
function resetCurrentSubjectUnits() {
    const subjectData = subjectsData[currentDevSubject];
    if (!subjectData) return;
    
    if (!confirm(`Are you sure you want to reset ${subjectData.name} units to default? This will remove any custom units you added.`)) {
        return;
    }
    
    // Reset to default units
    const defaultSubject = defaultSubjects[currentDevSubject];
    if (defaultSubject) {
        subjectData.units = [...defaultSubject.units];
        localStorage.setItem('subjectsData', JSON.stringify(subjectsData));
        
        populateUnitManager();
        updateAllSubjectInfo();
        
        // If this subject is currently selected in the main form, update units grid
        if (selectedSubject === currentDevSubject) {
            populateUnitsGrid(currentDevSubject);
        }
        
        alert(`${subjectData.name} units reset to default successfully!`);
    }
}

// Reset all subjects to default
function resetAllSubjects() {
    if (!confirm('Are you sure you want to reset ALL subjects to default? This will remove any custom subjects and units you added.')) {
        return;
    }
    
    subjectsData = JSON.parse(JSON.stringify(defaultSubjects));
    localStorage.setItem('subjectsData', JSON.stringify(subjectsData));
    
    populateSubjectDropdown();
    updateAllSubjectInfo();
    populateSubjectTabs();
    updateDevSubjectInfo();
    populateUnitManager();
    
    alert('All subjects reset to default successfully!');
}

// Add a new subject
function addNewSubject() {
    const subjectId = newSubjectId.value.trim().toLowerCase().replace(/\s+/g, '_');
    const subjectName = newSubjectName.value.trim();
    const subjectColor = newSubjectColor.value;
    
    if (!subjectId || !subjectName) {
        alert('Please enter both subject ID and name');
        return;
    }
    
    // Check if subject already exists
    if (subjectsData[subjectId]) {
        alert(`Subject with ID "${subjectId}" already exists`);
        return;
    }
    
    // Add new subject
    subjectsData[subjectId] = {
        name: subjectName,
        color: subjectColor,
        icon: 'fas fa-book',
        units: []
    };
    
    // Save to localStorage
    localStorage.setItem('subjectsData', JSON.stringify(subjectsData));
    
    // Update UI
    populateSubjectDropdown();
    populateSubjectTabs();
    
    // Create subject info panel
    createSubjectInfoPanel(subjectId, subjectName, subjectColor);
    
    // Clear inputs
    newSubjectId.value = '';
    newSubjectName.value = '';
    newSubjectColor.value = '#7209b7';
    
    alert(`Subject "${subjectName}" added successfully! You can now add units to it.`);
}

// Create a new subject info panel
function createSubjectInfoPanel(subjectId, subjectName, color) {
    // Create the info panel element
    const infoPanel = document.createElement('div');
    infoPanel.className = `subject-info ${subjectId}`;
    infoPanel.id = `${subjectId}Info`;
    infoPanel.style.display = 'none';
    infoPanel.style.backgroundColor = `${color}10`;
    infoPanel.style.borderColor = color;
    
    infoPanel.innerHTML = `
        <h3><i class="fas fa-book"></i> ${subjectName} Study Units</h3>
        <p>Here are the recommended units for ${subjectName} students:</p>
        <ul class="unit-list" id="${subjectId}UnitList">
            <li>No units added yet. Add units from the developer dashboard.</li>
        </ul>
    `;
    
    // Insert after the last subject info panel
    const lastSubjectInfo = document.querySelector('.subject-info:last-of-type');
    if (lastSubjectInfo) {
        lastSubjectInfo.after(infoPanel);
    }
}

// Clear all tasks
function clearAllTasks() {
    if (!confirm('Are you sure you want to clear ALL tasks? This action cannot be undone.')) {
        return;
    }
    
    tasks = [];
    activeTimers = 0;
    saveTasks();
    renderTasks();
    updateStats();
    
    // Clear timer interval
    if (window.timerInterval) {
        clearInterval(window.timerInterval);
        window.timerInterval = null;
    }
    
    alert('All tasks cleared successfully!');
}

// Export data
function exportData() {
    const appData = {
        tasks: tasks,
        subjectsData: subjectsData,
        settings: {
            audioEnabled: audioEnabled,
            voiceEnabled: voiceEnabled
        },
        exportDate: new Date().toISOString()
    };
    
    const dataStr = JSON.stringify(appData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `task-timer-backup-${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    alert('Data exported successfully!');
}

// Import data
function importData() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    
    input.onchange = function(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        
        reader.onload = function(e) {
            try {
                const importedData = JSON.parse(e.target.result);
                
                if (!confirm(`Are you sure you want to import data? This will replace your current tasks and settings.`)) {
                    return;
                }
                
                // Import tasks
                if (importedData.tasks) {
                    tasks = importedData.tasks;
                    saveTasks();
                }
                
                // Import subjects data
                if (importedData.subjectsData) {
                    subjectsData = importedData.subjectsData;
                    localStorage.setItem('subjectsData', JSON.stringify(subjectsData));
                }
                
                // Import settings
                if (importedData.settings) {
                    audioEnabled = importedData.settings.audioEnabled !== false;
                    voiceEnabled = importedData.settings.voiceEnabled !== false;
                    localStorage.setItem('audioEnabled', audioEnabled);
                    localStorage.setItem('voiceEnabled', voiceEnabled);
                    loadDeveloperSettings();
                }
                
                // Update UI
                renderTasks();
                updateStats();
                populateSubjectDropdown();
                updateAllSubjectInfo();
                populateSubjectTabs();
                updateDevSubjectInfo();
                populateUnitManager();
                
                alert('Data imported successfully!');
            } catch (error) {
                alert('Error importing data: Invalid file format');
            }
        };
        
        reader.readAsText(file);
    };
    
    input.click();
}

// Reset app
function resetApp() {
    if (!confirm('Are you sure you want to reset the entire app? This will delete ALL data including tasks, subjects, units, and settings.')) {
        return;
    }
    
    // Clear all localStorage
    localStorage.clear();
    
    // Reset variables
    tasks = [];
    activeTimers = 0;
    subjectsData = JSON.parse(JSON.stringify(defaultSubjects));
    audioEnabled = true;
    voiceEnabled = true;
    isDeveloperMode = false;
    currentDevSubject = 'microbiology';
    
    // Update UI
    renderTasks();
    updateStats();
    populateSubjectDropdown();
    updateAllSubjectInfo();
    populateSubjectTabs();
    updateDevSubjectInfo();
    populateUnitManager();
    loadDeveloperSettings();
    
    // Clear timer interval
    if (window.timerInterval) {
        clearInterval(window.timerInterval);
        window.timerInterval = null;
    }
    
    // Hide developer dashboard
    devDashboard.style.display = 'none';
    devAccessBtn.style.display = 'none';
    devIndicator.style.display = 'none';
    
    alert('App reset successfully! All data has been cleared.');
}

// Check if PWA is installable
function checkPWAInstallable() {
    // Check if app is already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
        installButton.style.display = 'none';
    }
}

// Install PWA
function installPWA() {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            } else {
                console.log('User dismissed the install prompt');
            }
            deferredPrompt = null;
        });
    }
}

// Add a new task
function addTask() {
    const title = document.getElementById('taskTitle').value.trim();
    const category = document.getElementById('taskCategory').value;
    const hours = parseInt(document.getElementById('hours').value) || 0;
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;
    
    if (!title) {
        alert('Please enter a task name');
        return;
    }
    
    const totalSeconds = (hours * 3600) + (minutes * 60) + seconds;
    
    if (totalSeconds <= 0) {
        alert('Please set a timer duration');
        return;
    }
    
    // For learning tasks, get the subject and unit
    let subjectValue = '';
    let unitCode = '';
    
    if (category === 'learning') {
        subjectValue = document.getElementById('subject').value;
        if (!subjectValue || subjectValue === '') {
            alert('Please select a subject for learning tasks');
            return;
        }
        
        if (subjectValue !== 'other' && !selectedUnit) {
            alert('Please select a unit for this subject');
            return;
        }
        
        unitCode = selectedUnit;
    }
    
    const newTask = {
        id: Date.now(),
        title,
        category,
        subject: subjectValue,
        unit: unitCode,
        totalSeconds,
        remainingSeconds: totalSeconds,
        isRunning: false,
        isCompleted: false,
        createdAt: new Date().toISOString()
    };
    
    tasks.push(newTask);
    saveTasks();
    renderTasks();
    updateStats();
    
    // Reset form
    document.getElementById('taskTitle').value = '';
    document.getElementById('hours').value = 0;
    document.getElementById('minutes').value = 30;
    document.getElementById('seconds').value = 0;
    
    // Reset subject selection
    if (category === 'learning') {
        document.querySelectorAll('.unit-card').forEach(card => {
            card.classList.remove('selected');
            card.style.backgroundColor = '';
        });
        selectedSubject = '';
        selectedUnit = '';
        subject.value = '';
        unitsSelection.style.display = 'none';
        hideAllSubjectInfo();
    }
    
    // Focus on task title input
    document.getElementById('taskTitle').focus();
}

// Render all tasks
function renderTasks() {
    if (tasks.length === 0) {
        emptyState.style.display = 'block';
        taskList.innerHTML = '';
        taskList.appendChild(emptyState);
        return;
    }
    
    emptyState.style.display = 'none';
    
    // Sort tasks: running first, then pending, then completed
    const sortedTasks = [...tasks].sort((a, b) => {
        if (a.isRunning && !b.isRunning) return -1;
        if (!a.isRunning && b.isRunning) return 1;
        if (!a.isCompleted && b.isCompleted) return -1;
        if (a.isCompleted && !b.isCompleted) return 1;
        return new Date(b.createdAt) - new Date(a.createdAt);
    });
    
    taskList.innerHTML = '';
    
    sortedTasks.forEach(task => {
        const taskElement = createTaskElement(task);
        taskList.appendChild(taskElement);
    });
}

// Create a task element
function createTaskElement(task) {
    const taskElement = document.createElement('div');
    taskElement.className = `task-item ${task.isRunning ? 'running' : ''} ${task.isCompleted ? 'completed' : ''} ${task.category === 'learning' ? 'learning' : ''}`;
    taskElement.dataset.id = task.id;
    
    const hours = Math.floor(task.remainingSeconds / 3600);
    const minutes = Math.floor((task.remainingSeconds % 3600) / 60);
    const seconds = task.remainingSeconds % 60;
    
    const timeDisplay = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    // Get subject data if it's a learning task
    let subjectData = null;
    let unitName = '';
    if (task.category === 'learning' && task.subject && subjectsData[task.subject]) {
        subjectData = subjectsData[task.subject];
        
        if (task.unit && subjectData.units) {
            const unitData = subjectData.units.find(u => u.code === task.unit);
            unitName = unitData ? unitData.name : '';
        }
    }
    
    taskElement.innerHTML = `
        <div class="task-header">
            <div>
                <div class="task-title">${task.title}</div>
                ${task.unit && subjectData ? `
                    <div class="task-unit" style="margin-top: 5px; background-color: ${subjectData.color}20; color: ${subjectData.color}; border-color: ${subjectData.color}">
                        <i class="${subjectData.icon}"></i> ${task.unit}${unitName ? `: ${unitName}` : ''}
                    </div>
                ` : ''}
            </div>
            <div class="task-category ${task.category}">${task.category.charAt(0).toUpperCase() + task.category.slice(1)}</div>
        </div>
        <div class="task-timer">
            <div class="timer-display">${timeDisplay}</div>
            <div class="timer-controls">
                ${!task.isCompleted ? `
                    <button class="timer-btn start-btn" onclick="toggleTimer(${task.id})">
                        <i class="fas ${task.isRunning ? 'fa-pause' : 'fa-play'}"></i>
                        ${task.isRunning ? 'Pause' : 'Start'}
                    </button>
                    <button class="timer-btn reset-btn" onclick="resetTimer(${task.id})">
                        <i class="fas fa-redo"></i> Reset
                    </button>
                ` : ''}
                <button class="timer-btn delete-btn" onclick="deleteTask(${task.id})">
                    <i class="fas fa-trash"></i> Delete
                </button>
            </div>
        </div>
        ${task.isCompleted ? `
            <div style="text-align: center; color: var(--success-color); font-weight: 600;">
                <i class="fas fa-check-circle"></i> Task Completed!
            </div>
        ` : ''}
    `;
    
    return taskElement;
}

// Toggle timer (start/pause)
function toggleTimer(taskId) {
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex === -1) return;
    
    const task = tasks[taskIndex];
    
    if (task.isCompleted) return;
    
    if (task.isRunning) {
        // Pause the timer
        task.isRunning = false;
        activeTimers--;
    } else {
        // Start the timer
        task.isRunning = true;
        activeTimers++;
        
        // If this is the first timer starting, start the timer interval
        if (activeTimers === 1) {
            startTimerInterval();
        }
    }
    
    tasks[taskIndex] = task;
    saveTasks();
    renderTasks();
    updateStats();
}

// Reset timer
function resetTimer(taskId) {
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex === -1) return;
    
    const task = tasks[taskIndex];
    
    if (task.isRunning) {
        task.isRunning = false;
        activeTimers--;
    }
    
    task.remainingSeconds = task.totalSeconds;
    task.isCompleted = false;
    
    tasks[taskIndex] = task;
    saveTasks();
    renderTasks();
    updateStats();
}

// Delete task
function deleteTask(taskId) {
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex === -1) return;
    
    const task = tasks[taskIndex];
    
    if (task.isRunning) {
        activeTimers--;
    }
    
    tasks.splice(taskIndex, 1);
    saveTasks();
    renderTasks();
    updateStats();
}

// Timer interval function
function startTimerInterval() {
    // Check if interval is already running
    if (window.timerInterval) {
        clearInterval(window.timerInterval);
    }
    
    window.timerInterval = setInterval(() => {
        let hasActiveTimers = false;
        
        tasks.forEach((task, index) => {
            if (task.isRunning && !task.isCompleted) {
                hasActiveTimers = true;
                
                if (task.remainingSeconds > 0) {
                    task.remainingSeconds--;
                    tasks[index] = task;
                } else {
                    // Timer completed
                    task.isRunning = false;
                    task.isCompleted = true;
                    activeTimers--;
                    tasks[index] = task;
                    
                    // Show time's up notification with sound
                    showTimeUpNotification(task.title);
                    
                    // Special message for learning tasks
                    if (task.category === 'learning' && task.subject && task.unit) {
                        setTimeout(() => {
                            const subjectData = subjectsData[task.subject];
                            if (subjectData) {
                                alert(`Great job completing your ${subjectData.name} study session for ${task.unit}! Keep up the good work!`);
                            }
                        }, 100);
                    }
                }
            }
        });
        
        if (hasActiveTimers) {
            renderTasks();
            updateStats();
            saveTasks();
        } else {
            // No active timers, clear interval
            clearInterval(window.timerInterval);
            window.timerInterval = null;
        }
    }, 1000);
}

// Update stats
function updateStats() {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.isCompleted).length;
    
    totalTasksEl.textContent = totalTasks;
    activeTimersEl.textContent = activeTimers;
    completedTasksEl.textContent = completedTasks;
}

// Save tasks to localStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Request notification permission
if ('Notification' in window && Notification.permission === 'default') {
    // We'll ask for permission when the first timer completes
}

// Initialize the app
document.addEventListener('DOMContentLoaded', init);

// Make functions available globally for onclick attributes
window.toggleTimer = toggleTimer;
window.resetTimer = resetTimer;
window.deleteTask = deleteTask;

// Populate unit manager when dev dashboard is shown
devDashboard.addEventListener('click', function() {
    populateUnitManager();
});