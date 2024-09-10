import React, { Children, ReactNode } from "react";
import { render, renderHook, screen, waitFor } from "@testing-library/react";
import PortfolioTable from "../../components/TableComponent/TableComponent";
import '@testing-library/jest-dom';
import { Provider } from "react-redux";
import { store } from "../../Redux Store/store";
import { useGetDataQuery } from '../../Services/Api';

import { isError } from "lodash";

jest.mock('../../Services/Api', () => ({
    useGetDataQuery: jest.fn(),
  }));

describe("Table component",()=>{

    test("mmmm",async()=>{
        (useGetDataQuery as jest.Mock).mockReturnValue({
            data: null,
            error: new Error("hdhsdh"),
            isError: true,
          });

        render(<PortfolioTable />,{
            wrapper: ({ children }) => <Provider store={store}>{children}</Provider>
        })
        const errorElement = screen.getByRole('heading',{
            level:3
        })
        await waitFor(()=>{
            expect(errorElement).toBeInTheDocument();
    
        })
        

    })
   
    
    
})



import React, { Children, ReactNode } from "react";
import { render, renderHook, screen, waitFor } from "@testing-library/react";
import PortfolioTable from "../../components/TableComponent/TableComponent";
import '@testing-library/jest-dom';
import { Provider } from "react-redux";
import { store } from "../../Redux Store/store";
import { useGetDataQuery } from "../../Services/Api";




    const errorElement = await screen.findByRole("heading", { level: 3 });
    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveTextContent("Error While Fetching Data");
