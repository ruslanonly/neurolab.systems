import $ from "jquery"

import bplaSVG from "../../assets/advantages/bpla.svg"
import avcSVG from "../../assets/advantages/avc.svg"
import everydayDetectSVG from "../../assets/advantages/everydaydetect.svg"
import integratedAnalyticsSVG from "../../assets/advantages/integratedAnalytics.svg"
import snowflakeSVG from "../../assets/advantages/snowflake.svg"
import targetSVG from "../../assets/advantages/target.svg"

let svgs = [everydayDetectSVG, integratedAnalyticsSVG, bplaSVG, snowflakeSVG, avcSVG, targetSVG]

export function setUpAdvantagesSVGs() {
  for (let i = 0; i < svgs.length; i++) {
    $.ajax(
      {
          url: svgs[i],
          dataType: 'html',
          type: 'GET',
          success: function(data) 
          {         
              $(`.advantages__list-item-photo[data-number="${i + 1}"]`).prepend(data);
          }
      });
  }
}
