<template>
  <div>
    <AppHero />
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
              <md-card class="md-card-example">
      <md-card-area md-inset>
        <md-card-media md-ratio="16:9">
          <img src="/assets/examples/card-example.jpg" alt="Coffee House">
        </md-card-media>

        <md-card-header>
          <h2 class="md-title">Coffee House</h2>
          <div class="md-subhead">
            <md-icon>location_on</md-icon>
            <span>2 miles</span>
          </div>
        </md-card-header>

        <md-card-content>
          Illy Coffee served with a complimentary Leonidas Belgian Chocolate with all beverages.
        </md-card-content>
      </md-card-area>

      <md-card-content>
        <h3 class="md-subheading">Today's availability</h3>
        <div class="card-reservation">
          <md-icon>access_time</md-icon>
          <div class="md-button-group">
            <md-button>5:30PM</md-button>
            <md-button>7:30PM</md-button>
            <md-button>9:00PM</md-button>
          </div>
        </div>
      </md-card-content>

      <md-card-actions>
        <md-button class="md-primary">Reserve</md-button>
      </md-card-actions>
    </md-card>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <div>
          <h1 class="title">Categories</h1>
          <div class="columns cover is-multiline is-mobile">
            <div
              class="column is-one-quarter"
              :style="{ 'min-height': '160px' }"
            >
              <a href="#">
                <span class="is-primary is-top is-medium tooltip">
                  <figure class="image is-4by3 imageFade">
                    <img
                      class="is-rounded"
                      src="https://images.unsplash.com/photo-1508355991726-ebd81e4802f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1506&q=80"
                      alt=""
                    />
                  </figure>
                  <div class="subtitle m-t-xs bold">Sport</div>
                </span>
              </a>
            </div>
            <div
              class="column is-one-quarter is-rounded"
              :style="{ 'min-height': '160px' }"
            >
              <a href="#">
                <span class="is-primary is-top is-medium tooltip">
                  <figure class="image is-4by3 imageFade">
                    <img
                      class="is-rounded"
                      src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                      alt=""
                    />
                  </figure>
                  <div class="subtitle m-t-xs bold">Movies</div>
                </span>
              </a>
            </div>
            <div
              class="column is-one-quarter is-rounded"
              :style="{ 'min-height': '160px' }"
            >
              <a href="#">
                <span class="is-primary is-top is-medium tooltip">
                  <figure class="image is-4by3 imageFade">
                    <img
                      class="is-rounded"
                      src="https://images.unsplash.com/photo-1511735111819-9a3f7709049c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80"
                      alt=""
                    />
                  </figure>
                  <div class="subtitle m-t-xs bold">Music</div>
                </span>
              </a>
            </div>
            <div
              class="column is-one-quarter is-rounded"
              :style="{ 'min-height': '160px' }"
            >
              <a href="#">
                <span class="is-primary is-top is-medium tooltip">
                  <figure class="image is-4by3 imageFade">
                    <img
                      class="is-rounded"
                      src="https://images.unsplash.com/photo-1509670811615-bb8b07cb3caf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1510&q=80"
                      alt=""
                    />
                  </figure>
                  <div class="subtitle m-t-xs bold">Dance</div>
                </span>
              </a>
            </div>
            <div
              class="column is-one-quarter is-rounded"
              :style="{ 'min-height': '160px' }"
            >
              <a href="#">
                <span class="is-primary is-top is-medium tooltip">
                  <figure class="image is-4by3 imageFade">
                    <img
                      class="is-rounded"
                      src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                      alt=""
                    />
                  </figure>
                  <div class="subtitle m-t-xs bold">Party</div>
                </span>
              </a>
            </div>
            <div
              class="column is-one-quarter is-rounded"
              :style="{ 'min-height': '160px' }"
            >
              <a href="#">
                <span class="is-primary is-top is-medium tooltip">
                  <figure class="image is-4by3 imageFade">
                    <img
                      class="is-rounded"
                      src="https://images.unsplash.com/photo-1490633874781-1c63cc424610?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                      alt=""
                    />
                  </figure>
                  <div class="subtitle m-t-xs bold">Books</div>
                </span>
              </a>
            </div>
            <div
              class="column is-one-quarter is-rounded"
              :style="{ 'min-height': '160px' }"
            >
              <a href="#">
                <span class="is-primary is-top is-medium tooltip">
                  <figure class="image is-4by3 imageFade">
                    <img
                      class="is-rounded"
                      src="https://images.unsplash.com/photo-1536510233921-8e5043fce771?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1542&q=80"
                      alt=""
                    />
                  </figure>
                  <div class="subtitle m-t-xs bold">Food</div>
                </span>
              </a>
            </div>
            <div
              class="column is-one-quarter is-rounded"
              :style="{ 'min-height': '160px' }"
            >
              <a href="#">
                <span class="is-primary is-top is-medium tooltip">
                  <figure class="image is-4by3 imageFade">
                    <img
                      class="is-rounded"
                      src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                      alt=""
                    />
                  </figure>
                  <div class="subtitle m-t-xs bold">Games</div>
                </span>
              </a>
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
          eventName: "Donation program ",
          eventTime: "Jan 20,2020",
          eventDescription:
            "Maghi is observed in January on the first day of the month of Magh, bringing an end to the ill-omened month of Poush when all religious ceremonies are forbidden. People take Holy Bath in this festival and make and distribute delicious fudges like laddoo, ghee, chaku, sweet potatoes etc. Mother of the house wishes good health to all family members. According to Mahabharata, king Bhisma, who had the control on his own death, choose to die on the day of Maghe Sakranti. Therefore it is believed that person die  this day achieve Moksha (salvation)."
        },
        {
          eventName: "Love program ",
          eventTime: "Jan 20,2020",
          eventDescription:
            "Maghi is observed in January on the first day of the month of Magh, bringing an end to the ill-omened month of Poush when all religious ceremonies are forbidden. People take Holy Bath in this festival and make and distribute delicious fudges like laddoo, ghee, chaku, sweet potatoes etc. Mother of the house wishes good health to all family members. According to Mahabharata, king Bhisma, who had the control on his own death, choose to die on the day of Maghe Sakranti. Therefore it is believed that person die  this day achieve Moksha (salvation)."
        },
        {
          eventName: "Cleaning program ",
          eventTime: "Jan 20,2020",
          eventDescription:
            "Maghi is observed in January on the first day of the month of Magh, bringing an end to the ill-omened month of Poush when all religious ceremonies are forbidden. People take Holy Bath in this festival and make and distribute delicious fudges like laddoo, ghee, chaku, sweet potatoes etc. Mother of the house wishes good health to all family members. According to Mahabharata, king Bhisma, who had the control on his own death, choose to die on the day of Maghe Sakranti. Therefore it is believed that person die  this day achieve Moksha (salvation)."
        },
        {
          eventName: "Maha program ",
          eventTime: "Jan 20,2020",
          eventDescription:
            "Maghi is observed in January on the first day of the month of Magh, bringing an end to the ill-omened month of Poush when all religious ceremonies are forbidden. People take Holy Bath in this festival and make and distribute delicious fudges like laddoo, ghee, chaku, sweet potatoes etc. Mother of the house wishes good health to all family members. According to Mahabharata, king Bhisma, who had the control on his own death, choose to die on the day of Maghe Sakranti. Therefore it is believed that person die  this day achieve Moksha (salvation)."
        },
        {
          eventName: "Saman program ",
          eventTime: "Jan 20,2020",
          eventDescription:
            "Maghi is observed in January on the first day of the month of Magh, bringing an end to the ill-omened month of Poush when all religious ceremonies are forbidden. People take Holy Bath in this festival and make and distribute delicious fudges like laddoo, ghee, chaku, sweet potatoes etc. Mother of the house wishes good health to all family members. According to Mahabharata, king Bhisma, who had the control on his own death, choose to die on the day of Maghe Sakranti. Therefore it is believed that person die  this day achieve Moksha (salvation)."
        },
        {
          eventName: "Praful program ",
          eventTime: "Jan 20,2020",
          eventDescription:
            "Maghi is observed in January on the first day of the month of Magh, bringing an end to the ill-omened month of Poush when all religious ceremonies are forbidden. People take Holy Bath in this festival and make and distribute delicious fudges like laddoo, ghee, chaku, sweet potatoes etc. Mother of the house wishes good health to all family members. According to Mahabharata, king Bhisma, who had the control on his own death, choose to die on the day of Maghe Sakranti. Therefore it is believed that person die  this day achieve Moksha (salvation)."
        },
        {
          eventName: "Prabin program ",
          eventTime: "Jan 20,2020",
          eventDescription:
            "Maghi is observed in January on the first day of the month of Magh, bringing an end to the ill-omened month of Poush when all religious ceremonies are forbidden. People take Holy Bath in this festival and make and distribute delicious fudges like laddoo, ghee, chaku, sweet potatoes etc. Mother of the house wishes good health to all family members. According to Mahabharata, king Bhisma, who had the control on his own death, choose to die on the day of Maghe Sakranti. Therefore it is believed that person die  this day achieve Moksha (salvation)."
        }
      ]
    };
  },
  methods: {
    getEvents() {}
  }
};
</script>

<style lang="scss" scoped>
.is-rounded {
  border-radius: 10px !important;
}

.events-cards-main {
  display: flex;

  height: 80vh;
  width: 95%;
  align-self: center;
  border: 1px solid red;
  overflow: auto;
}

.events-cards-side {
  height: 100%;
  width: 25%;
  border: 1px solid black;
}
.events-cards {
  display: flex;
  flex: 1;
  border: 1px solid blue;
    overflow: auto;

}

.cards {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.card {
  margin: 10px;
  width: 31%;
  height: 290px;
  border: 1px solid black;
}
 .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }

  .md-card-example {
    .md-subhead {
      .md-icon {
        $size: 16px;

        width: $size;
        min-width: $size;
        height: $size;
        font-size: $size !important;
      }

      span {
        vertical-align: middle;
      }
    }

    .card-reservation {
      margin-top: 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .md-icon {
        margin: 8px;
      }
    }

    .md-button-group {
      display: flex;

      .md-button {
        min-width: 60px;
        border-radius: 2px;
      }
    }
  }
</style>
