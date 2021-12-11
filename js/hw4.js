let distance = parseInt(prompt('Where do we shoot, captain!?'))
if (distance >28 && distance <30) {
    alert('HITTED!')
} else if (distance >=30) {
    alert('OVERSHOOT!')
} else if (distance >=0 && distance <= 28)  {
    alert('UNDERSHOOT!')
} else if (distance <= 0) {
    alert('DO NOT SHOOT AT ALLIES!')
}