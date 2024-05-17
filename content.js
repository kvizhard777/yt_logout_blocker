function disableLogoutButton() {
  const logoutButton = document.querySelector('a[href*="logout"]')

  if (logoutButton) {
    logoutButton.style.pointerEvents = 'none'
    logoutButton.style.opacity = '0.5'
  }
}

const observer = new MutationObserver(disableLogoutButton)
observer.observe(document.body, { childList: true, subtree: true })

disableLogoutButton()