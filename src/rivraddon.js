import makeRequest from "./utils/endpointUtils";
import endpoint from "./config/endpoint";
import constants from "./config/constants";

const rivraddon = {
  analytics: {
    enableAnalytics: function() {
      console.log(constants.enableAnalyticsLogOutput);
    },
    trackPbjsEvent: function({ eventType }) {
      makeRequest
        .post(endpoint.tracker, { eventType })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.error("An error occurred", error.statusText);
        });
    }
  }
};

window["rivraddon"] = rivraddon;
export default rivraddon;
