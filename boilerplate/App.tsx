import { theme } from '@myApp/common';
import { RootStack } from '@myApp/navigation';
import { store } from '@myApp/state';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { ThemeProvider } from 'react-native-magnus';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
// import { QueryClient, QueryClientProvider } from 'react-query';

// export const queryClient = new QueryClient();

/** TODO: Replace @Remarks with logic when you start the project */

const StartUp = () => {
  useEffect(() => {
    const init = async () => {
      /** @Remarks - Do stuff on start */
    };
    init().finally(async () => {
      /** @Remarks - Start app when loading is complete */
    });
    /** @Remarks - Should only run once */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <RootStack isSignedIn={true} />;
};

export const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            {/* @Remarks - uncomment queryClient once endpoints and react query is set */}
            {/* <QueryClientProvider client={queryClient}> */}
            <StartUp />
            {/* </QueryClientProvider> */}
          </NavigationContainer>
        </ThemeProvider>
      </SafeAreaProvider>
    </Provider>
  );
};
