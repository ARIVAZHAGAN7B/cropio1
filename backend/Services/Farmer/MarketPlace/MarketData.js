module.exports = function MarketData (req,res) {
    const products = [
      {
        title: "Organic Wheat",
        available: true,
        quantity: 500,
        price: 2,
        delivery: "Available",
        category: "Grains",
        location: "USA",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDKJLq2jjObMy83X7SsFPEzk6j9TI2pjUVE49Dui2q88SxFtODT_Nz3OkZAb9kmlyJ-gs1LwfqMnrOBkGI5jAsTkf_sUOBFVOgfhzoDOFQ8-StZ-e1rB_HSwn8z8YZp70z07Td96n6eSK-rQFnm6XuebgIV74Hreei1YKPrTYoLSR6VOShso3BBvuAMxCmoD5gaMlsgxahYxzlvrO9Z8WVoRMLqgYAaEdGEM-Zkm5zgsjybraPOmicevbVb-u5l50W107LyArTmBv0",
      },
      {
        title: "Fresh Tomatoes",
        available: true,
        quantity: 200,
        price: 1.5,
        delivery: "Available",
        category: "Vegetables",
        location: "Mexico",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBwCjGJ-1VOsroSDqYMTtoJSlIYTgTNqlEBm-2rvqd-eJ6aN_Y-4hHdQSMQQMbiWDcHHcov7yr4TjxJtg26c8IW6hver8iZudZh5Gkiit1fkX9KTcgHe8JJ_3YC7Re0fW__Oy1RfGLA1NKcKxKE8wMQJoEQDw-3hPzVqRqDCxNezEbAS8kqwwKEgLqPxuAUO8a5Lw6Aca3ODQ4n-sJedUsUJg47RgBKqngiRhaES2ya5JowgZvlcIQId4nzxRgXuxyzQgtq8kGVi3E",
      },
      {
        title: "Apples",
        available: true,
        quantity: 300,
        price: 1,
        delivery: "Available",
        category: "Fruits",
        location: "USA",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDXnXZQXE8PvIs5ySp7p4WwHVvHuOhE-xCru0e7fj79ZfVA7wuDlmTcxL98LTfz5RS_4N5qXZQpsQc36IKi9JjbZBVKXU-1ejXjI1znfneXFqyFqXZ4No-tqVxWxI-4Nf4UY9joiPb8s0CYpWAwitfmm3L-JnS8b5xYj4miluDxKyDisF08PGJyxgbfX0iJNsmUhN4xkWv7kINqZtnqGX7OFvMTJ87-DGDHnJU9I3PUEam5QJuvzj1OLWgrrf1VuHO2tnr5JbXPt6w",
      },
      {
        title: "Corn",
        available: true,
        quantity: 400,
        price: 0.8,
        delivery: "Available",
        category: "Grains",
        location: "Mexico",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAQNHQgoZl--PT5YWOVxoAG93vDcCyXV7bB4cXu9tD3rJTroIdisBkvf9-1muc4LdyRkBePnPq6-oaxDQjMTib53mMRd_eKQMBTZZz3WjAh_xvQ0o-oVnX85LktW9ViSRiFMd_PHqp2mWZI_asPX-Z1u-xVYd3CzfUcqRHqAF3VNcR5RHXGN1bbEU686SuEaheYHD7zddZl1AjdKe-4MZiZ466Qnv_YLaG6eXB508UpKYr24c_b1Z_H912tlOuDkwQ1NfFTjOgphvY",
      },
    ];
    res.json(products);
}