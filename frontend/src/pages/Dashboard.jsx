import {
useEffect,
useState
}
from "react";

import Sidebar
from "../components/Sidebar";

import Navbar
from "../components/Navbar";

import DashboardCard
from "../components/DashboardCard";

import {
getDashboardStats
}
from "../services/dashboardService";

function Dashboard() {

    const [stats,setStats] =
    useState(null);

    useEffect(()=>{

        fetchStats();

    },[]);

    const fetchStats =
    async()=>{

        try{

            const data =
            await getDashboardStats();

            setStats(data);

        }
        catch(error){

            console.log(error);

        }

    };

    return (

        <div
            style={{
                display:"flex"
            }}
        >

            <Sidebar/>

            <div
                style={{
                    flex:1,
                    padding:"20px"
                }}
            >

                <Navbar/>

                <h1>
                    Dashboard
                </h1>

                {stats && (

                    <div
                        style={{
                            display:"flex",
                            gap:"20px",
                            flexWrap:"wrap"
                        }}
                    >

                        <DashboardCard
                            title="Total Patients"
                            value={
                                stats.totalPatients
                            }
                        />

                        <DashboardCard
                            title="Active Patients"
                            value={
                                stats.activePatients
                            }
                        />

                        <DashboardCard
                            title="Today's Appointments"
                            value={
                                stats.todayAppointments
                            }
                        />

                        <DashboardCard
                            title="Upcoming FollowUps"
                            value={
                                stats.upcomingFollowUps
                            }
                        />

                    </div>

                )}

            </div>

        </div>

    );

}

export default Dashboard;