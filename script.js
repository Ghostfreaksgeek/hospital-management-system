let totalWorkouts = 0;
let totalTime = 0;

function addWorkout() {
    const workoutInput = document.getElementById('workout');
    const durationInput = document.getElementById('duration');
    const workout = workoutInput.value.trim();
    const duration = parseInt(durationInput.value);

    if (workout && duration > 0) {
        const li = document.createElement('li');
        li.textContent = `${workout} - ${duration} min`;
        document.getElementById('workout-list').appendChild(li);

        totalWorkouts++;
        totalTime += duration;

        document.getElementById('total-workouts').textContent = totalWorkouts;
        document.getElementById('total-time').textContent = totalTime;

        workoutInput.value = '';
        durationInput.value = '';
    } else {
        alert('Please enter valid workout and duration!');
    }
}
