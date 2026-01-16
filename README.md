# HotelBooking

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Notes

 - uses Angular CDK for the modal dialog component
 - uses Bootstrap as the base style, with my own design system for color and spacing
 - uses RxJS to mock backend data API. Added network delay to show loading indicator.
 - uses CSS Grid for key layouts for more flexibility compared to Bootstrap grid system.
 - mock data is in a JSON file and imported into main app component.
 - uses `alert()` to display a toast for simplicity, but this is easily replaced with a proper toast library component.
 - updating the state to `booked` after a successful booking is not done. I feel that the mock data setup with immutable data will take too much time to convert to a mutable state that can be updated, so I leave it as is. 
