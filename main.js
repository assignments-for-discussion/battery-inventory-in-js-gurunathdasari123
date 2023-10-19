const assert = require('assert');

function countBatteriesByHealth(presentCapacities) {
    // Initialize counters for healthy, exchange, and failed batteries
    let healthy = 0;
    let exchange= 0;
    let failed = 0;

    // Iterate through the array of present capacities
    for (let i = 0; i < presentCapacities.length; i++) {
        const ratedCapacity = 120;  // Rated capacity of a new battery
        const soh = (presentCapacities[i] / ratedCapacity) * 100;

        // Classify the battery based on SoH
        if (soh > 80) {
            healthyCount++;
        } else if (soh >= 63 && soh <= 80) {
            exchangeCount++;
        } else {
            failedCount++;
        }
    }

    return [healthyCount, exchangeCount, failedCount];
}


function testBucketingByHealth() {
  console.log('Counting batteries by SoH...');
  const presentCapacities = [113, 116, 80, 95, 92, 70];
  counts = countBatteriesByHealth(presentCapacities);
  assert(counts["healthy"] == 2);
  assert(counts["exchange"] == 3);
  assert(counts["failed"] == 1);
  console.log("Done counting :)");
}

testBucketingByHealth();
