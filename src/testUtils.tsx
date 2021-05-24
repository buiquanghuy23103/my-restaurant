import { render as originalRender, RenderOptions } from "@testing-library/react";
import { ReactElement } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "./redux/configureStore";

const render = (ui: ReactElement, renderOptions?: RenderOptions) => {


    const customWrapper: React.FC = ({ children }) => {
        const store = configureStore();
        return (
            <Provider store={ store }>
                <BrowserRouter>
                    { children }
                </BrowserRouter>
            </Provider>
        );
    };

    return originalRender(ui, { wrapper: customWrapper, ...renderOptions })

};

// re-export everything
export * from "@testing-library/react";

// override render method
export { render };
