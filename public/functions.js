function handleClick(email, issueID) {
    var checkbox = document.getElementById("flexSwitchCheckDefault");
    checkbox.style.backgroundColor = "green";
    checkbox.checked = true;
    checkbox.disabled = true;
    var subject = "Issue Resolved";
    var body = "Your issue has been resolved. Please contact us if you need further assistance.";
    var mailtoLink = "mailto:" + email + "?subject=" + subject + "&body=" + body;
    window.open(mailtoLink, '_blank');
}