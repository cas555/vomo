<template>
    <div class="home">
        <!-- <CreateNewEventModal/> -->

        <div class="container home">
            <section class="section">
                <!-- show the event  in the card -->
                <div class="events-cards-main">
                    <div class="events-cards-side">
                        <div class="create-event-button">
                            <button
                                @click="showModal = !showModal"
                                type="button"
                                class="btn btn-outline-primary"
                            >
                                Create Eventg
                            </button>
                            <b-button @click="Show2Modal" id="show-btn"
                                >Open</b-button
                            >
                            <div>
                                <b-modal v-model="showModal" hide-footer>
                                    <template v-slot:modal-title>
                                        Using <code>$bvModal</code> Methods
                                    </template>
                                    <div class="d-block text-center">
                                        <h3>Hello From This Modal!</h3>
                                    </div>
                                    <b-button
                                        class="mt-3"
                                        block
                                        @click="showModal = !showModal"
                                        >Close Me</b-button
                                    >
                                </b-modal>
                            </div>
                            <div>
                                <b-modal
                                    ref="my-modal"
                                    hide-footer
                                    title="Using Component Methods"
                                >
                                    <div class="d-block text-center">
                                        <h3>Hello From My Modal!</h3>
                                    </div>
                                    <b-button
                                        class="mt-3"
                                        variant="outline-danger"
                                        block
                                        @click="hideModal"
                                        >Close Me</b-button
                                    >
                                    <b-button
                                        class="mt-2"
                                        variant="outline-warning"
                                        block
                                        @click="toggleModal"
                                        >Toggle Me</b-button
                                    >
                                </b-modal>
                            </div>
                        </div>
                    </div>
                    <div class="events-cards">
                        <div class="cards">
                            <div
                                class="card"
                                v-for="(event, index) in Events"
                                :key="index.id"
                            >
                                <div class="userdetail">
                                    <div class="profile">
                                        <img
                                            src="../../../public/images/profile.jpg"
                                            class="image-profile"
                                        />
                                    </div>
                                    <div class="name-time">
                                        <div class="name">
                                            {{ event.userName }}
                                        </div>
                                        <div class="time">
                                            {{ event.postDate }}
                                        </div>
                                    </div>
                                </div>
                                <div class="discription-image">
                                    <div class="discription">
                                        <p style="text-align:justify">
                                            {{ event.eventDescription }}
                                        </p>
                                    </div>
                                    <div class="image">
                                        <img
                                            class="is-rounded image-image"
                                            src="https://images.unsplash.com/photo-1508355991726-ebd81e4802f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1506&q=80"
                                            alt=""
                                        />
                                    </div>
                                    <div class="action">
                                        <button
                                            type="button"
                                            class="btn btn-outline-success"
                                        >
                                            Join Events
                                        </button>
                                        <button
                                            type="button"
                                            class="btn btn-outline-danger"
                                        >
                                            Message
                                        </button>
                                    </div>
                                </div>
                                <div class="actionbutton"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <CreateNewEventModal /> -->
            </section>
        </div>
    </div>
</template>

<script>
import CreateNewEventModal from "./CreateNewEventModal";
import { BButton, VBModal, BModal } from "bootstrap-vue";
// import eventApi from "../Api/eventApi";
export default {
    components: {
        // eventApi
        CreateNewEventModal,
        "b-button": BButton,
        "b-modal": BModal
    },
    directives: {
        VBModal
    },
    data() {
        return {
            Events: [
                {
                    userName: "Praful Manandhar",
                    postDate: "12:30 pm",
                    eventName: "Donation program ",
                    eventTime: "Jan 20,2020",
                    eventDescription:
                        "Maghi is observed in January on the first day of the month of Magh, religious ceremonies are forbidden. People take Holy Bath in this festival and make and distribute delicious fudges like laddoo, ghee, chaku, sweet potatoes etc. Mother of the house wishes good health to all family members. According to Mahabharata, king Bhisma, who had the control on his own death, choose to die on the day of Maghe Sakranti. Therefore it is believed that person die  this day achieve Moksha (salvation)."
                }
            ],
            isFormDisplayed: false,
            showModal: false
        };
    },
    methods: {
        Show2Modal() {
            this.$refs["my-modal"].show();
        },
        getEvents() {},
        toggleDisplayForm() {
            this.isFormDisplayed = !this.isFormDisplayed;
        },
        showCreateModal() {
            console.log("showCreateModal");
            this.$modal.show("create-event");
        }
    }
};
</script>

<style lang="scss" rel="stylesheet/scss">
.is-rounded {
    border-radius: 10px !important;
}

.events-cards-main {
    display: flex;
    padding-top: 50px;

    height: 100vh;
    width: 95%;
    align-self: center;
    // border: 1px solid red;
    overflow: auto;
}

.events-cards-side {
    height: 100%;
    width: 25%;
    // border: 1px solid black;
}
.events-cards {
    display: flex;
    flex: 1;
    overflow: auto;
    -webkit-box-shadow: 17px 28px 47px 2px rgba(0, 0, 0, 0.52);
    -moz-box-shadow: 17px 28px 47px 2px rgba(0, 0, 0, 0.52);
    box-shadow: 17px 28px 47px 2px rgba(0, 0, 0, 0.52);
}
.home {
    width: 100%;
    height: 100%;
    background-color: rgb(199, 250, 233);
}

.cards {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
.card {
    display: flex;
    flex-direction: column;
    width: 95%;
}

.userdetail {
    height: 50px;
    width: 99%;
    margin: 5px 2px 0px 2px;
    display: flex;
    justify-content: left;
}
.profile {
    margin: 5px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.image-profile {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.name-time {
    display: flex;
    flex-wrap: wrap;
    width: 50%;
}
.name {
    display: flex;
    height: 25px;
    margin: 1px;
    width: 100%;
}
.image-image {
    height: 100%;
    object-fit: cover;
    object-position: center;
    width: 100%;
}
.time {
    display: flex;
    flex: 1;
    height: 45%;
}
.discription-image {
    margin: 2px;
    width: 99%;
    display: flex;
    display: flex;
    flex-direction: column;
}
.discription {
    margin: 2px;
    height: 40%;
    overflow: scroll;
}
::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
}
.image {
    margin: 2px;
    height: 80%;
}
.new-event-button {
    width: 100%;
    height: 40px;
    margin-top: 50px;
    border: 1px sienna solid;
}
.modal-backdrop
{
    opacity:0.5 !important;
}
</style>
