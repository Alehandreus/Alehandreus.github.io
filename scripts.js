function copyToClipboard() {
    const el = document.createElement('textarea');
    el.value = document.getElementById("mail-text").innerHTML;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    showCopied();
};

window.onload = function createLinks() {
    var linksData = [
        ["simple-icons:github", "GitHub", "https://github.com/Alehandreus"],        
        // ["cib:kaggle", "Kaggle", "https://www.kaggle.com/alehandreus"],
        // ["simple-icons:leetcode", "Leetcode", "https://leetcode.com/Alehandreus/"],
        ["simple-icons:telegram", "Telegram", "https://t.me/alehandreus"],
        ["simple-icons:facebook", "Facebook", "https://www.facebook.com/profile.php?id=100024930003858"],
        ["simple-icons:vk", "ВКонтакте", "https://vk.com/id474339941"],
        ["simple-icons:steam", "Steam", "https://steamcommunity.com/profiles/76561198854382470/"],        
    ]
    delay = 0;
    linksData.forEach(element => {
        createLink(element[0], element[1], element[2], delay);
        delay += 70;
    });
    
}

function createLink(iconData, linkName, linkUrl, delay) {
    linkContainer = $("<a>");
    linkContainer.addClass("link-container");
    linkContainer.attr("href", linkUrl);
    linkContainer.attr("target", "_blank");
    linkContainer.css("opacity", "0"); 

    icon = $("<span>");
    icon.addClass("iconify link-icon");
    icon.attr("data-icon", iconData);
    icon.attr("data-inline", "False");
    icon.attr("data-width", 37);
    icon.attr("data-height", 37);

    linkText = $("<div>");
    linkText.addClass("link-text");
    linkText.text(linkName);

    linkContainer.append(icon);
    linkContainer.append(linkText);

    $('#links').append(linkContainer);
    linkContainer.delay(delay).animate({opacity: 1}, 300, "linear");
}

function showCopied() {
    $('#copied-message').animate({opacity: 1}, 10).delay(2000).animate({opacity: 0}, 10);
}