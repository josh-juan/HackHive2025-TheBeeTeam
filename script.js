$(document).ready(function(){
    $('#back').hide();
    $('#muscle_brief').hide();
    
    // Store currently selected body parts
    let selectedParts = new Set();
});

// Interactive muscle selection
$(document).on('click', 'svg', function() {
    const id = $(this).attr('id');
    const muscleClass = $(this).attr('class');
    
    // Call toggle selection function
    toggleSelection(this, 'muscles');
    
    // Show muscle information
    $('#static_muscle_brief').hide();
    $('#muscle_brief').fadeIn();
    
    // Map numeric IDs to muscle names
    const muscleNames = {
        '0': 'Biceps',
        '1': 'Chest',
        '2': 'Trapezius',
        '3': 'Shoulders',
        '4': 'Abdominals',
        '5': 'Forearms',
        '6': 'Thighs',
        '7': 'Calves'
    };
    
    // Display muscle information
    $('#muscle_name').text(muscleNames[id] || muscleClass);
});

// Handle front/back view toggle
$(document).ready(function(){
    $('input[name=group1]').on('change', function() {
        const view = $(this).val();
        $('.human-body').hide();
        $(`#${view}`).fadeIn();
    });
});