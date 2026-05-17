(function () {
    "use strict";

    /** @type {{ id: number, role: "user" | "assistant", content: string }[]} */
    const messages = [];
    let messageId = 0;

    const recommended = document.getElementById("chat-recommended");
    const messagesPanel = document.getElementById("chat-messages");
    const messagesList = document.getElementById("chat-messages-list");
    const inputForm = document.getElementById("chat-input-form");
    const inputField = document.getElementById("chat-input-field");
    const sidebarOverlay = document.getElementById("chat-sidebar-overlay");
    const sidebarOpenBtn = document.getElementById("chat-sidebar-open");
    const sidebarCloseBtn = document.getElementById("chat-sidebar-close");
    
    const newChatButtons = document.querySelectorAll("[data-chat-new]");
    const recommendedButtons = document.querySelectorAll("[data-recommended-question]");

    function hydrateServerMessages() {
        if (!messagesList) {
            return;
        }

        messagesList.querySelectorAll("[data-server-message]").forEach(function (el) {
            const rawRole = el.getAttribute("data-role");
            const role = rawRole === "user" ? "user" : "assistant";
            const content = el.textContent.trim();
            if (!content) {
                return;
            }
            messages.push({
                id: messageId,
                role: role,
                content: content,
            });
            messageId += 1;
        });
    }

    // 모서리 변형 뾰족 창 실시간 렌더러 (로봇 이모지/이름 완전 제거 버전)
    function renderMessages() {
        if (!messagesList) {
            return;
        }

        messagesList.innerHTML = "";

        messages.forEach(function (message) {
            const rowWrapper = document.createElement("div");
            
            if (message.role === "user") {
                // 유저: 우측 정렬 + 오른쪽 위 모서리 각지게(rounded-tr-none)
                rowWrapper.className = "flex justify-end w-full";

                const bubble = document.createElement("div");
                bubble.className = "max-w-[75%] rounded-2xl rounded-tr-none bg-red-600 px-4 py-2.5 text-sm font-medium text-white shadow-2xs break-all";
                
                const paragraph = document.createElement("p");
                paragraph.className = "leading-relaxed";
                paragraph.textContent = message.content;
                
                bubble.appendChild(paragraph);
                rowWrapper.appendChild(bubble);
            } else {
                // AI: 좌측 정렬 + 왼쪽 위 모서리 각지게(rounded-tl-none) / 프로필 흔적 완전 제거
                rowWrapper.className = "flex justify-start w-full";

                const bubble = document.createElement("div");
                bubble.className = "max-w-[75%] rounded-2xl rounded-tl-none bg-white border border-gray-100 px-4 py-2.5 text-sm font-medium text-gray-800 shadow-3xs break-all";
                
                const paragraph = document.createElement("p");
                paragraph.className = "leading-relaxed";
                paragraph.textContent = message.content;

                bubble.appendChild(paragraph);
                rowWrapper.appendChild(bubble);
            }

            messagesList.appendChild(rowWrapper);
        });

        if (messagesPanel) {
            messagesPanel.scrollTop = messagesPanel.scrollHeight;
        }
    }

    function updateView() {
        const hasMessages = messages.length > 0;

        if (recommended) {
            recommended.classList.toggle("hidden", hasMessages);
            recommended.classList.toggle("flex", !hasMessages);
        }

        if (messagesPanel) {
            messagesPanel.classList.remove("hidden");
        }

        if (hasMessages) {
            renderMessages();
        } else {
            if (messagesList) {
                messagesList.innerHTML = "";
            }
        }
    }

    function sendMessage(content) {
        const trimmed = content.trim();
        if (!trimmed) {
            return;
        }

        messages.push({
            id: Date.now(),
            role: "user",
            content: trimmed,
        });
        messageId += 1;

        updateView();
    }

    function handleNewChat() {
        messages.length = 0;
        messageId = 0;

        if (window.history && window.history.replaceState) {
            window.history.replaceState({}, "", window.location.pathname);
        }

        updateView();
        closeSidebar();
    }

    function openSidebar() {
        if (sidebarOverlay) {
            sidebarOverlay.classList.remove("hidden");
        }
    }

    function closeSidebar() {
        if (sidebarOverlay) {
            sidebarOverlay.classList.add("hidden");
        }
    }

    if (inputForm && inputField) {
        inputForm.addEventListener("submit", function (event) {
            event.preventDefault();
            sendMessage(inputField.value);
            inputField.value = "";
        });
    }

    newChatButtons.forEach(function (button) {
        button.addEventListener("click", handleNewChat);
    });

    recommendedButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const question = button.getAttribute("data-recommended-question");
            if (question) {
                sendMessage(question);
            }
        });
    });

    if (sidebarOpenBtn) {
        sidebarOpenBtn.addEventListener("click", openSidebar);
    }

    if (sidebarCloseBtn) {
        sidebarCloseBtn.addEventListener("click", closeSidebar);
    }

    if (sidebarOverlay) {
        sidebarOverlay.addEventListener("click", function (event) {
            if (event.target === sidebarOverlay) {
                closeSidebar();
            }
        });
    }

    hydrateServerMessages();
    updateView();
})();