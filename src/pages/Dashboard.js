import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Layout/Layout";
import {
  saveCovidData,
  toggleCovidLoading,
} from "../Redux/actions/covidAction";
import { handleStatusFilter } from "../Redux/actions/GeneralAction";
import "./Dashboard.scss";
import { GetAllData } from "../Network/services/covid";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import mapDataNigeria from "../data/mapDataNigeria";
import { statesAndCode } from "../data/statesAndCode";
import { getKeyByValue, getTitle } from "../utils/functions";
import { appNotification, Loader } from "../components";
import CovidCard from "../components/Cards/CovidCard/CovidCard";

// Load Highcharts modules
require("highcharts/modules/map")(Highcharts);

const formatter = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 0,
});

const Dashboard = () => {
  const dispatch = useDispatch();
  const covidData = useSelector((state) => state.CovidReducer?.covidData);
  const isLoadingData = useSelector(
    (state) => state.CovidReducer.isLoadingData
  );
  const filterTerm = useSelector((state) => state.GeneralReducer.filterTerm); //fetch filter term from redux
  const status = useSelector((state) => state.GeneralReducer.status); //fetch status term from redux

  //function to fetch covid data
  const getCovidData = async () => {
    dispatch(toggleCovidLoading());
    let res = await GetAllData();
    if (res.status === 200) {
      //if api call is successful, save data to redux store
      dispatch(saveCovidData(res.data.data));
    } else {
      //error message pops up on failure
      appNotification(res.statusText, 'Something went wrong!', 'error')
    }
    //stop loader
    dispatch(toggleCovidLoading());
  };

  //fetch covid data on page load
  useEffect(() => {
    getCovidData();
  }, []);

  //function to convert the incoming data to highchart maps format
  const splitCovidData = () => {
    let newData = [];
    covidData?.states?.filter((state) => state?.state?.toLowerCase().includes(filterTerm.toLowerCase())).map((item) => {
      let stateCode = getKeyByValue(statesAndCode, item.state);
      newData.push([stateCode, item[status]]);
    });
    return newData;
  };

  //set map options
  const mapOptions = {
    title: {
      text: getTitle(status),
    },
    colorAxis: {
      min: 0,
      stops: [
        [0.03, "#40ff00"],
        [0.06, "#ffff00"],
        [0.1, "#00ffff"],
        [0.2, "#ffbf00"],
        [0.5, "#ff8000"],
        [1, "#ff0000"],
      ],
    },
    series: [
      {
        mapData: mapDataNigeria,
        name: "Nigeria",
        data: splitCovidData(),
        states: {
          hover: {
            color: "#ffffff",
          },
        },
        dataLabels: {
          enabled: true,
          format: "{point.name}",
        },
      },
    ],
    chart: {
      height: window.innerWidth < 700 ? '100%' : '60%'
    }
  };


  return (
    <Layout>
      {isLoadingData ? (
        <Loader />
      ) : (
        <div className="dashboard">
          {/* Create summary cards */}
          <div className="summaryCards">
            <CovidCard
              title="Total Samples Tested"
              subtitle={formatter.format(
                covidData?.totalSamplesTested
                  ? parseInt(covidData?.totalSamplesTested.replace(/\,/g, ''))
                  : 0
              )}
            />
            <CovidCard
              title="Total Confirmed Cases"
              subtitle={formatter.format(
                covidData?.totalConfirmedCases
                  ? parseInt(covidData?.totalConfirmedCases)
                  : 0
              )}
            />
            <CovidCard
              title="Total Active Cases"
              subtitle={formatter.format(
                covidData?.totalActiveCases
                  ? parseInt(covidData?.totalActiveCases)
                  : 0
              )}
            />
            <CovidCard
              title="Discharged"
              subtitle={formatter.format(
                covidData?.discharged ? parseInt(covidData?.discharged) : 0
              )}
            />
            <CovidCard
              title="Death"
              subtitle={formatter.format(
                covidData?.death ? parseInt(covidData?.death) : 0
              )}
            />
          </div>
          
          {/* filter based on covid status */}
          <div className="filter_container my-3">
            <div className="filter">
              <label className="mr-1">FILTER:</label>
              <select
                className="px-2 py-1"
                onChange={(e) => dispatch(handleStatusFilter(e.target.value))}
              >
                <option value="confirmedCases">Confirmed Case</option>
                <option value="casesOnAdmission">Cases on Admission</option>
                <option value="discharged">Discharged</option>
                <option value="death">Death</option>
              </select>
            </div>
          </div>

          {/* Draw map */}
          <HighchartsReact
            options={mapOptions}
            constructorType={"mapChart"}
            highcharts={Highcharts}
          />
        </div>
      )}
    </Layout>
  );
};

export default Dashboard;
