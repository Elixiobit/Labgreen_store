import cardItem from "./CardItem.js";
import boxItem from "./BoxItem.js";

export default {
    components: {
        cardItem,
        boxItem
    },
    template: /*html*/`
        <div class="container marketing">
            <card-item></card-item>
            <box-item></box-item>
        </div><!-- /.container -->
    `
}
