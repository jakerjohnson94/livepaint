// Add logic to this script to poll server every second for updated pixels.
let clientUpdates = [];

function pollRequest() {
    console.log('clientUpdates at top of poll request: ', clientUpdates)
    const postMethod = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "clientUpdates": clientUpdates
        })

    };

    fetch("/updates", postMethod)
        .then(response => response.json())
        .then(data => {

            if (data.updates.length) {
                for (update of data.updates) {
                    bitmap.setColor(update[0], update[1], update[2])
                }
                clientUpdates = (data.updates)
            }
            console.log('data at end of promises', data)

        })

    setTimeout(pollRequest, 5000);

}
pollRequest()