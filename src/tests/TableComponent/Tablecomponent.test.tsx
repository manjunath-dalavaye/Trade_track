import React, { Children, ReactNode } from "react";
import { render, renderHook, screen, waitFor } from "@testing-library/react";
import PortfolioTable from "../../components/TableComponent/TableComponent";
import '@testing-library/jest-dom';
import { Provider } from "react-redux";
import { store } from "../../Redux Store/store";
import { useGetDataQuery } from "../../Services/Api";



describe('Test For Table Component', () => {
  test('Table renders correctly', async () => {
    
  render(<PortfolioTable />,{
    wrapper:({children})=><Provider store={store}>{children}</Provider>
  })

    await waitFor(() => {
      expect(screen.getByRole('table')).toBeInTheDocument();
    });
  });
  test("test for custom hook", async()=>{
    const {result} = renderHook(()=>useGetDataQuery(),{
        wrapper:({children})=><Provider store={store}>{children}</Provider>
    })
   await waitFor(()=>{
    expect(result.current.isSuccess).toBe(true);
   })
    
  })
});
