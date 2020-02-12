<template>
  <div>
    <div class="container">
      <section class="section">
        <div class="m-b-lg">
          <h1 class="title is-inline">Featured Meetups in "Location"</h1>
          <AppDropdown />
          <button class="button is-primary is-pulled-right m-r-sm">
            Create Meetups
          </button>
          <button class="button is-primary is-pulled-right m-r-sm">All</button>
        </div>
        <!-- show the event  in the card -->
        <div class="events-cards-main">
          <div class="events-cards-side"></div>
          <div class="events-cards">
            <div class="cards">
              <div
                class="card"
                v-for="(event, index) in Events"
                :key="index.id"
              >
                <div class="userdetail">
                  <!-- <div class="profile">
                    <img src="../profile.jpg" class="image-profile" />
                  </div> -->
                  <div class="name-time">
                    <div class="name">{{ event.userName }}</div>
                    <div class="time">{{ event.postDate }}</div>
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
                    <button type="button" class="btn btn-outline-success">
                      Join Events
                    </button>
                    <button type="button" class="btn btn-outline-danger">
                      Message
                    </button>
                  </div>
                </div>
                <div class="actionbutton"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
   
    </div>
  </div>
</template>

<script>
// import eventApi from "../Api/eventApi";
export default {
  components: {
    // eventApi
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
        },
        
      ]
    };
  },
  methods: {
    getEvents() {}
  }
};
</script>

<style lang="scss"  rel='stylesheet/scss'>

.is-rounded {
  border-radius: 10px !important;
}

.events-cards-main {
  display: flex;

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
      -webkit-box-shadow: 17px 28px 47px 2px rgba(0,0,0,0.52);
-moz-box-shadow: 17px 28px 47px 2px rgba(0,0,0,0.52);
box-shadow: 17px 28px 47px 2px rgba(0,0,0,0.52);

}

.cards {
  width: 100%;
  display: flex;
  flex-wrap: wrap;

}
.card {
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 95%;
  height: 500px;
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
  height: 400px;
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
  height: 50%;
}
</style>
