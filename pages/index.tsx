import type { NextPage } from "next";
import { Navigate } from "../components/nav";
import { TabMenu } from "../components/tab";
import { NavigationWrapper } from "../components/nav/nav-wrapper";
import client from "../utils/apollo/apollo-client.config";
import { gql } from "@apollo/client";

const Home: NextPage = ({ countries }: any) => {
  console.log("data ", countries);
  return (
    <NavigationWrapper>
      <Navigate />
      <TabMenu />
    </NavigationWrapper>
  );
};

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query {
        histories {
          details
        }
      }
    `,
  });

  return {
    props: {
      countries: data,
    },
  };
}

export default Home;
