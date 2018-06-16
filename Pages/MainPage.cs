using Xamarin.Forms;

namespace CityOfFuture
{
    public class MainPage : ContentPage
    {
        public MainPage()
        {
            this.Title = "Demo";

            var listView = new ListView();

            listView.ItemsSource = new[]
            {
                "LocalTracking"
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

