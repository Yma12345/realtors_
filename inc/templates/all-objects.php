<template id="all-objects-template">
    {{#.}}
        <div class="card w-25 flex m-4">
        <h5 class="card-header">{{street}} {{housenumber}}</h5>
        <img class="card-img-top" src="inc/house.jpg">
            <div class="card-body">
                <h5 class="card-title">{{region}}</h5>
                <p class="card-text">{{zipcode}} {{place}}</p>
                <button class="objects-info-btn btn" id="{{id}}" data-bs-toggle="modal" data-bs-target="#more-info-modal">MORE INFO</button>
            </div>
        </div>
        {{}}

    {{/.}}
</template>