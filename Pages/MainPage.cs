using Xamarin.Forms;

namespace XamarinExample
{
    public class MainPage : ContentPage
    {
        public MainPage()
        {
            this.Title = "Samples";

            var listView = new ListView();

            listView.ItemsSource = new[]
            {
                "02_AdvancedImageTracking_3_ExtendedTracking"
            };

            // Using ItemTapped
            listView.ItemTapped += async (sender, e) =>
               {
                   ARPage arPage = new ARPage(e.Item.ToString());
                   await Navigation.PushAsync(arPage);
                   ((ListView)sender).SelectedItem = null;
               };

            Padding = new Thickness(0, 0, 0, 0);
            Content = listView;
        }
    }
}

