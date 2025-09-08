// TestCafe Web Automation Test Suite for DevExpress Example
// Author: Generated for VS Code execution
// Website: https://devexpress.github.io/testcafe/example/

import { Selector, t } from 'testcafe';

// Test fixture configuration
fixture('DevExpress TestCafe Example - Web Automation Testing')
    .page('https://devexpress.github.io/testcafe/example/')
    .beforeEach(async t => {
        // Set execution speed (0.1 = slow, 1 = fast, 0.5 = moderate)
        await t.setTestSpeed(0.6);
        
        // Take initial screenshot
        await t.takeScreenshot('01_initial_page_load.png');
    });

// Page selectors with descriptive names
const pageElements = {
    // Form elements
    nameInput: Selector('#developer-name'),
    submitButton: Selector('#submit-button'),
    
    // Checkbox elements
    interfaceCheckbox: Selector('#windows'),
    osCheckboxes: {
        windows: Selector('#windows'),
        macOS: Selector('#macos'),
        linux: Selector('#linux')
    },
    
    // Radio buttons for JavaScript features
    jsFeatureRadios: {
        es6: Selector('#tried-test-cafe'),
        es2017: Selector('#tried-selenium'),
        typescript: Selector('#tried-appium')
    },
    
    // Dropdown/Select elements
    jsSelect: Selector('#preferred-interface'),
    
    // Slider element
    ratingSlider: Selector('#slider'),
    
    // Comments textarea
    commentsTextarea: Selector('#comments'),
    
    // Results section
    resultsSection: Selector('#article-header'),
    
    // Thank you message
    thankYouMessage: Selector('h1').withText('Thank you')
};

// Test Case 1: Basic Form Filling and Submission
test('Complete form filling with all elements', async t => {
    console.log('Starting comprehensive form filling test...');
    
    // Step 1: Fill in the developer name
    await t
        .typeText(pageElements.nameInput, 'TestCafe Automation User', { replace: true })
        .wait(1000) // Small pause for visibility
        .takeScreenshot('02_name_filled.png');
    
    console.log('✓ Name field filled');
    
    // Step 2: Select operating system checkboxes
    await t
        .click(pageElements.osCheckboxes.windows)
        .wait(500)
        .click(pageElements.osCheckboxes.macOS)
        .wait(500)
        .takeScreenshot('03_os_selection.png');
    
    console.log('✓ Operating systems selected');
    
    // Step 3: Select JavaScript features (radio buttons)
    await t
        .click(pageElements.jsFeatureRadios.es6)
        .wait(1000)
        .takeScreenshot('04_js_features_selected.png');
    
    console.log('✓ JavaScript features selected');
    
    // Step 4: Select preferred interface from dropdown
    await t
        .click(pageElements.jsSelect)
        .wait(500)
        .click(pageElements.jsSelect.find('option').withText('Both'))
        .wait(1000)
        .takeScreenshot('05_interface_selected.png');
    
    console.log('✓ Preferred interface selected');
    
    // Step 5: Adjust rating slider
    await t
        .drag(pageElements.ratingSlider, 100, 0, { offsetX: 50, offsetY: 0 })
        .wait(1000)
        .takeScreenshot('06_slider_adjusted.png');
    
    console.log('✓ Rating slider adjusted');
    
    // Step 6: Fill comments textarea
    await t
        .typeText(pageElements.commentsTextarea, 
            'This is an automated test using TestCafe. ' +
            'Testing various form elements including text inputs, checkboxes, ' +
            'radio buttons, dropdowns, and sliders. ' +
            'The automation is working perfectly!', 
            { replace: true })
        .wait(1000)
        .takeScreenshot('07_comments_filled.png');
    
    console.log('✓ Comments filled');
    
    // Step 7: Submit the form
    await t
        .click(pageElements.submitButton)
        .wait(2000) // Wait for form submission
        .takeScreenshot('08_form_submitted.png');
    
    console.log('✓ Form submitted');
    
    // Step 8: Verify successful submission
    await t
        .expect(pageElements.thankYouMessage.exists).ok('Thank you message should appear')
        .takeScreenshot('09_success_verification.png');
    
    console.log('✓ Form submission verified successfully');
});

// Test Case 2: Individual Element Testing
test('Individual element interaction testing', async t => {
    console.log('Starting individual element testing...');
    
    // Test each checkbox individually
    await t
        .click(pageElements.osCheckboxes.windows)
        .expect(pageElements.osCheckboxes.windows.checked).ok('Windows checkbox should be checked')
        .takeScreenshot('10_windows_checked.png')
        .wait(500);
    
    await t
        .click(pageElements.osCheckboxes.macOS)
        .expect(pageElements.osCheckboxes.macOS.checked).ok('macOS checkbox should be checked')
        .takeScreenshot('11_macos_checked.png')
        .wait(500);
    
    await t
        .click(pageElements.osCheckboxes.linux)
        .expect(pageElements.osCheckboxes.linux.checked).ok('Linux checkbox should be checked')
        .takeScreenshot('12_linux_checked.png')
        .wait(500);
    
    console.log('✓ All checkboxes tested individually');
    
    // Test radio buttons
    await t
        .click(pageElements.jsFeatureRadios.es2017)
        .expect(pageElements.jsFeatureRadios.es2017.checked).ok('ES2017 radio should be selected')
        .takeScreenshot('13_es2017_selected.png')
        .wait(1000);
    
    await t
        .click(pageElements.jsFeatureRadios.typescript)
        .expect(pageElements.jsFeatureRadios.typescript.checked).ok('TypeScript radio should be selected')
        .takeScreenshot('14_typescript_selected.png')
        .wait(1000);
    
    console.log('✓ Radio buttons tested');
});

// Test Case 3: Form Validation Testing
test('Form validation and error handling', async t => {
    console.log('Starting form validation testing...');
    
    // Try to submit empty form
    await t
        .click(pageElements.submitButton)
        .wait(1000)
        .takeScreenshot('15_empty_form_submission.png');
    
    // Check if we're still on the same page (form validation should prevent submission)
    await t
        .expect(pageElements.nameInput.exists).ok('Should remain on form page when empty')
        .takeScreenshot('16_validation_check.png');
    
    console.log('✓ Form validation tested');
    
    // Fill minimum required fields and submit
    await t
        .typeText(pageElements.nameInput, 'Validation Test User')
        .click(pageElements.osCheckboxes.windows)
        .click(pageElements.jsFeatureRadios.es6)
        .wait(1000)
        .takeScreenshot('17_minimum_fields_filled.png');
    
    await t
        .click(pageElements.submitButton)
        .wait(2000)
        .takeScreenshot('18_minimum_form_submitted.png');
    
    console.log('✓ Minimum required fields submission tested');
});

// Test Case 4: Page Navigation and UI Elements
test('UI elements and page interaction testing', async t => {
    console.log('Starting UI elements testing...');
    
    // Test page title and main elements visibility
    await t
        .expect(Selector('h1').withText('Example').exists).ok('Page title should be visible')
        .takeScreenshot('19_page_title_check.png');
    
    // Test all form elements are present
    await t
        .expect(pageElements.nameInput.exists).ok('Name input should exist')
        .expect(pageElements.osCheckboxes.windows.exists).ok('Windows checkbox should exist')
        .expect(pageElements.jsFeatureRadios.es6.exists).ok('JavaScript radio buttons should exist')
        .expect(pageElements.jsSelect.exists).ok('Interface select should exist')
        .expect(pageElements.commentsTextarea.exists).ok('Comments textarea should exist')
        .expect(pageElements.submitButton.exists).ok('Submit button should exist')
        .takeScreenshot('20_all_elements_verified.png');
    
    console.log('✓ All UI elements verified');
    
    // Test dropdown options
    const dropdownOptions = pageElements.jsSelect.find('option');
    await t
        .click(pageElements.jsSelect)
        .expect(dropdownOptions.count).gte(2, 'Dropdown should have multiple options')
        .takeScreenshot('21_dropdown_options.png')
        .wait(1000);
    
    console.log('✓ Dropdown functionality tested');
});

// Test Case 5: Cross-browser compatibility simulation
test('Complete workflow with detailed logging', async t => {
    console.log('Starting complete workflow test with detailed logging...');
    
    const testData = {
        name: 'TestCafe Professional Tester',
        operatingSystems: ['Windows', 'macOS'],
        jsFramework: 'TestCafe',
        interface: 'Command Line',
        rating: 9,
        comments: 'Comprehensive testing completed successfully with TestCafe automation framework. ' +
                 'All form elements tested including input fields, checkboxes, radio buttons, ' +
                 'dropdown selections, sliders, and text areas. ' +
                 'Screenshots captured at each step for documentation purposes.'
    };
    
    // Step-by-step execution with logging
    console.log('Step 1: Filling name field...');
    await t
        .typeText(pageElements.nameInput, testData.name, { replace: true })
        .takeScreenshot('22_workflow_name.png')
        .wait(800);
    
    console.log('Step 2: Selecting operating systems...');
    await t
        .click(pageElements.osCheckboxes.windows)
        .click(pageElements.osCheckboxes.macOS)
        .takeScreenshot('23_workflow_os.png')
        .wait(800);
    
    console.log('Step 3: Selecting JavaScript testing experience...');
    await t
        .click(pageElements.jsFeatureRadios.es6)
        .takeScreenshot('24_workflow_js.png')
        .wait(800);
    
    console.log('Step 4: Selecting interface preference...');
    await t
        .click(pageElements.jsSelect)
        .click(pageElements.jsSelect.find('option').withText('Command Line'))
        .takeScreenshot('25_workflow_interface.png')
        .wait(800);
    
    console.log('Step 5: Setting rating...');
    await t
        .drag(pageElements.ratingSlider, 150, 0)
        .takeScreenshot('26_workflow_rating.png')
        .wait(800);
    
    console.log('Step 6: Adding comments...');
    await t
        .typeText(pageElements.commentsTextarea, testData.comments, { replace: true })
        .takeScreenshot('27_workflow_comments.png')
        .wait(1000);
    
    console.log('Step 7: Final form review...');
    await t
        .takeScreenshot('28_workflow_final_review.png')
        .wait(1000);
    
    console.log('Step 8: Submitting form...');
    await t
        .click(pageElements.submitButton)
        .wait(3000)
        .takeScreenshot('29_workflow_submission.png');
    
    console.log('Step 9: Verifying success...');
    await t
        .expect(pageElements.thankYouMessage.exists).ok('Success message should appear')
        .takeScreenshot('30_workflow_success.png');
    
    console.log('✓ Complete workflow test finished successfully');
});

// Helper function for custom assertions (if needed)
async function customWait(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}