await t


//Click
    .click('selector', { options })

//Double Click
    .doubleClick('selector', { options })

//Right Click
    .rightClick('selector', { options })

//Drag Element
    .drag('selector', 200, 0, { options })

//Hover
    .hover('selector', { options })

//Select text
    .selectText('selector')

//Type text
    .typeText('selector', 'text')

//Press any key on the keyboard
    .pressKey('keyname')

//Navigate
    .navigateTo('url')

// Take Screenshot
    .takeScreenshot()
    .takeElementScreenshot()

//Resize Window
    .resizeWindow(800,600)
