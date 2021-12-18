import {
  createSignal,
  For,
  createMemo,
  Switch,
  Match,
  createEffect,
} from "solid-js";

import { useStore } from "../../store/Store";

const CountdownElement = (props) => {
  const [state, actions] = useStore();

  const text_styles = createMemo(() =>
    actions.getTextStyles({ element: props.element, swatches: props.swatches })
  );

  const getTextAlignFromAlignment = () => {
    switch (text_styles.alignmentHorizontal) {
      case "flex-start":
        return "left";
      case "center":
        return "center";
      case "flex-end":
        return "right";
    }
  };

  return (
    <>
      <div className="text-container" style={text_styles}>
        <For each={props.card_state.formatted_text}>
          {(instruction) => (
            <span
              style={{
                "text-align": getTextAlignFromAlignment(),
              }}
            >
              {actions.getTimer()}
            </span>
          )}
        </For>
      </div>
    </>
  );
};

export default CountdownElement;
