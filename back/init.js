var initialize = function() {
     var result = ` INSERT INTO post(shopid,userid,fuelid,price,my_date) VALUES
( 1 , 5 , 1 , 1.576 , ' 2019-02-10 '),
( 1 , 5 , 1 , 1.497 , ' 2019-03-03 '),
( 1 , 2 , 1 , 1.501 , ' 2019-03-04 '),
( 1 , 5 , 1 , 1.499 , ' 2019-01-17 '),
( 1 , 1 , 1 , 1.549 , ' 2019-02-28 '),
( 1 , 8 , 1 , 1.487 , ' 2018-11-25 '),
( 1 , 1 , 1 , 1.537 , ' 2019-03-02 '),
( 1 , 5 , 1 , 1.541 , ' 2019-02-28 '),
( 1 , 6 , 1 , 1.543 , ' 2019-02-03 '),
( 1 , 2 , 1 , 1.514 , ' 2019-02-03 '),
( 1 , 7 , 1 , 1.55 , ' 2019-01-30 '),
( 1 , 8 , 1 , 1.482 , ' 2019-03-03 '),
( 1 , 1 , 1 , 1.58 , ' 2019-02-03 '),
( 1 , 2 , 1 , 1.459 , ' 2019-02-27 '),
( 1 , 6 , 1 , 1.511 , ' 2019-02-28 '),
( 1 , 7 , 2 , 1.595 , ' 2019-02-28 '),
( 1 , 5 , 2 , 1.613 , ' 2019-03-03 '),
( 1 , 7 , 2 , 1.66 , ' 2019-02-27 '),
( 1 , 4 , 2 , 1.691 , ' 2019-01-17 '),
( 1 , 1 , 2 , 1.699 , ' 2019-03-02 '),
( 1 , 1 , 2 , 1.617 , ' 2019-03-04 '),
( 1 , 4 , 2 , 1.574 , ' 2019-01-15 '),
( 1 , 6 , 2 , 1.632 , ' 2019-01-15 '),
( 1 , 4 , 2 , 1.588 , ' 2019-02-27 '),
( 1 , 7 , 2 , 1.57 , ' 2019-03-03 '),
( 1 , 7 , 2 , 1.623 , ' 2019-01-17 '),
( 1 , 3 , 2 , 1.553 , ' 2019-01-15 '),
( 1 , 7 , 2 , 1.704 , ' 2019-02-27 '),
( 1 , 7 , 2 , 1.558 , ' 2019-03-01 '),
( 1 , 5 , 2 , 1.633 , ' 2019-02-11 '),
( 1 , 5 , 3 , 1.728 , ' 2018-11-25 '),
( 1 , 1 , 3 , 1.778 , ' 2019-03-02 '),
( 1 , 6 , 3 , 1.797 , ' 2019-03-03 '),
( 1 , 2 , 3 , 1.712 , ' 2019-03-04 '),
( 1 , 6 , 3 , 1.736 , ' 2019-02-26 '),
( 1 , 2 , 3 , 1.692 , ' 2019-01-17 '),
( 1 , 4 , 3 , 1.829 , ' 2019-01-17 '),
( 1 , 8 , 3 , 1.791 , ' 2019-01-30 '),
( 1 , 7 , 3 , 1.741 , ' 2018-12-30 '),
( 1 , 2 , 3 , 1.889 , ' 2019-02-25 '),
( 1 , 6 , 3 , 1.703 , ' 2018-12-30 '),
( 1 , 6 , 3 , 1.769 , ' 2019-03-02 '),
( 1 , 5 , 3 , 1.77 , ' 2019-01-17 '),
( 1 , 7 , 3 , 1.857 , ' 2018-12-30 '),
( 1 , 7 , 3 , 1.862 , ' 2019-02-03 '),
( 1 , 1 , 4 , 1.32 , ' 2019-03-01 '),
( 1 , 1 , 4 , 1.312 , ' 2019-01-15 '),
( 1 , 6 , 4 , 1.357 , ' 2018-11-25 '),
( 1 , 6 , 4 , 1.338 , ' 2019-03-04 '),
( 1 , 2 , 4 , 1.309 , ' 2019-02-25 '),
( 1 , 8 , 4 , 1.303 , ' 2019-03-03 '),
( 1 , 3 , 4 , 1.356 , ' 2019-03-01 '),
( 1 , 2 , 4 , 1.352 , ' 2019-02-11 '),
( 1 , 2 , 4 , 1.258 , ' 2019-03-01 '),
( 1 , 1 , 4 , 1.342 , ' 2018-11-25 '),
( 1 , 7 , 4 , 1.31 , ' 2018-12-30 '),
( 1 , 6 , 4 , 1.334 , ' 2019-02-17 '),
( 1 , 2 , 4 , 1.253 , ' 2019-02-11 '),
( 1 , 8 , 4 , 1.36 , ' 2019-03-01 '),
( 1 , 7 , 5 , 1.458 , ' 2019-02-25 '),
( 1 , 4 , 5 , 1.435 , ' 2019-03-03 '),
( 1 , 6 , 5 , 1.456 , ' 2019-02-17 '),
( 1 , 6 , 5 , 1.378 , ' 2019-02-11 '),
( 1 , 5 , 5 , 1.376 , ' 2019-02-10 '),
( 1 , 3 , 5 , 1.421 , ' 2019-02-25 '),
( 1 , 1 , 5 , 1.4 , ' 2019-03-04 '),
( 1 , 8 , 5 , 1.385 , ' 2019-03-03 '),
( 1 , 2 , 5 , 1.447 , ' 2019-02-10 '),
( 1 , 5 , 5 , 1.43 , ' 2019-01-23 '),
( 1 , 2 , 5 , 1.411 , ' 2019-02-28 '),
( 1 , 6 , 5 , 1.394 , ' 2019-02-03 '),
( 1 , 3 , 5 , 1.409 , ' 2019-02-03 '),
( 1 , 4 , 5 , 1.463 , ' 2019-01-15 '),
( 1 , 6 , 6 , 0.738 , ' 2019-02-03 '),
( 1 , 3 , 6 , 0.685 , ' 2019-03-04 '),
( 1 , 6 , 6 , 0.753 , ' 2019-01-15 '),
( 1 , 1 , 6 , 0.765 , ' 2019-02-17 '),
( 1 , 2 , 6 , 0.764 , ' 2019-02-27 '),
( 1 , 1 , 6 , 0.741 , ' 2018-12-30 '),
( 1 , 4 , 6 , 0.785 , ' 2019-01-17 '),
( 1 , 7 , 6 , 0.796 , ' 2019-02-03 '),
( 1 , 4 , 6 , 0.675 , ' 2019-02-25 '),
( 1 , 7 , 6 , 0.67 , ' 2019-01-15 '),
( 1 , 2 , 6 , 0.778 , ' 2019-02-10 '),
( 1 , 2 , 6 , 0.749 , ' 2019-02-17 '),
( 1 , 2 , 6 , 0.812 , ' 2019-02-03 '),
( 1 , 1 , 6 , 0.807 , ' 2019-02-25 '),
( 1 , 5 , 6 , 0.696 , ' 2019-02-25 '),
( 1 , 8 , 7 , 0.832 , ' 2019-03-01 '),
( 1 , 4 , 7 , 0.772 , ' 2019-02-03 '),
( 1 , 3 , 7 , 0.868 , ' 2019-01-15 '),
( 1 , 2 , 7 , 0.884 , ' 2019-02-03 '),
( 1 , 8 , 7 , 0.804 , ' 2019-01-30 '),
( 1 , 4 , 7 , 0.774 , ' 2019-02-17 '),
( 1 , 1 , 7 , 0.864 , ' 2018-11-25 '),
( 1 , 8 , 7 , 0.781 , ' 2019-02-03 '),
( 1 , 2 , 7 , 0.767 , ' 2018-12-30 '),
( 1 , 1 , 7 , 0.912 , ' 2019-02-27 '),
( 1 , 7 , 7 , 0.913 , ' 2019-02-26 '),
( 1 , 6 , 7 , 0.859 , ' 2019-02-17 '),
( 1 , 6 , 7 , 0.896 , ' 2019-03-01 '),
( 1 , 5 , 7 , 0.782 , ' 2019-02-17 '),
( 2 , 5 , 1 , 1.581 , ' 2019-02-27 '),
( 2 , 5 , 1 , 1.593 , ' 2019-02-27 '),
( 2 , 3 , 1 , 1.516 , ' 2019-03-01 '),
( 2 , 3 , 1 , 1.557 , ' 2019-01-15 '),
( 2 , 2 , 1 , 1.505 , ' 2019-02-03 '),
( 2 , 1 , 1 , 1.53 , ' 2019-03-02 '),
( 2 , 3 , 1 , 1.485 , ' 2019-02-03 '),
( 2 , 5 , 1 , 1.492 , ' 2019-01-23 '),
( 2 , 5 , 1 , 1.563 , ' 2019-02-11 '),
( 2 , 6 , 1 , 1.599 , ' 2019-03-03 '),
( 2 , 3 , 1 , 1.483 , ' 2019-02-25 '),
( 2 , 5 , 2 , 1.667 , ' 2018-11-25 '),
( 2 , 5 , 2 , 1.649 , ' 2019-03-03 '),
( 2 , 2 , 2 , 1.596 , ' 2019-02-03 '),
( 2 , 6 , 2 , 1.732 , ' 2019-02-25 '),
( 2 , 7 , 2 , 1.696 , ' 2019-02-17 '),
( 2 , 7 , 2 , 1.653 , ' 2019-02-26 '),
( 2 , 5 , 2 , 1.68 , ' 2019-01-23 '),
( 2 , 8 , 2 , 1.654 , ' 2019-01-30 '),
( 2 , 5 , 2 , 1.658 , ' 2019-01-23 '),
( 2 , 5 , 2 , 1.627 , ' 2019-02-26 '),
( 2 , 4 , 2 , 1.663 , ' 2018-11-25 '),
( 2 , 4 , 2 , 1.622 , ' 2019-02-26 '),
( 2 , 2 , 2 , 1.652 , ' 2019-01-17 '),
( 2 , 6 , 3 , 1.738 , ' 2019-02-27 '),
( 2 , 6 , 3 , 1.8 , ' 2019-03-04 '),
( 2 , 8 , 3 , 1.88 , ' 2019-02-10 '),
( 2 , 4 , 3 , 1.776 , ' 2019-02-26 '),
( 2 , 5 , 3 , 1.872 , ' 2019-02-27 '),
( 2 , 5 , 3 , 1.895 , ' 2019-02-26 '),
( 2 , 5 , 3 , 1.687 , ' 2018-11-25 '),
( 2 , 2 , 3 , 1.839 , ' 2019-02-11 '),
( 2 , 8 , 3 , 1.772 , ' 2019-02-27 '),
( 2 , 8 , 3 , 1.785 , ' 2019-01-30 '),
( 2 , 8 , 3 , 1.831 , ' 2019-03-01 '),
( 2 , 2 , 3 , 1.86 , ' 2018-11-25 '),
( 2 , 4 , 4 , 1.299 , ' 2019-02-10 '),
( 2 , 7 , 4 , 1.267 , ' 2019-03-02 '),
( 2 , 8 , 4 , 1.39 , ' 2019-03-04 '),
( 2 , 5 , 4 , 1.383 , ' 2019-02-10 '),
( 2 , 5 , 4 , 1.278 , ' 2019-03-02 '),
( 2 , 8 , 4 , 1.306 , ' 2019-03-03 '),
( 2 , 2 , 4 , 1.381 , ' 2019-01-30 '),
( 2 , 5 , 4 , 1.316 , ' 2019-02-03 '),
( 2 , 2 , 4 , 1.367 , ' 2019-01-15 '),
( 2 , 1 , 4 , 1.285 , ' 2019-02-17 '),
( 2 , 5 , 4 , 1.33 , ' 2019-01-17 '),
( 2 , 5 , 5 , 1.455 , ' 2019-02-27 '),
( 2 , 3 , 5 , 1.417 , ' 2019-02-27 '),
( 2 , 2 , 5 , 1.371 , ' 2019-02-03 '),
( 2 , 1 , 5 , 1.422 , ' 2018-11-25 '),
( 2 , 5 , 5 , 1.426 , ' 2019-03-02 '),
( 2 , 1 , 5 , 1.407 , ' 2019-01-15 '),
( 2 , 8 , 5 , 1.384 , ' 2019-03-01 '),
( 2 , 1 , 5 , 1.45 , ' 2018-11-25 '),
( 2 , 8 , 5 , 1.424 , ' 2019-02-25 '),
( 2 , 1 , 5 , 1.388 , ' 2019-02-10 '),
( 2 , 6 , 5 , 1.395 , ' 2019-03-01 '),
( 2 , 8 , 5 , 1.427 , ' 2019-02-25 '),
( 2 , 4 , 5 , 1.363 , ' 2019-02-26 '),
( 2 , 2 , 6 , 0.683 , ' 2019-02-27 '),
( 2 , 3 , 6 , 0.655 , ' 2019-02-28 '),
( 2 , 8 , 6 , 0.726 , ' 2019-02-26 '),
( 2 , 6 , 6 , 0.814 , ' 2019-02-03 '),
( 2 , 1 , 6 , 0.792 , ' 2019-02-25 '),
( 2 , 4 , 6 , 0.658 , ' 2019-03-02 '),
( 2 , 3 , 6 , 0.652 , ' 2019-01-30 '),
( 2 , 3 , 6 , 0.669 , ' 2018-12-30 '),
( 2 , 3 , 6 , 0.787 , ' 2019-01-17 '),
( 2 , 2 , 6 , 0.815 , ' 2019-01-15 '),
( 2 , 1 , 6 , 0.689 , ' 2019-02-27 '),
( 2 , 4 , 6 , 0.739 , ' 2019-01-30 '),
( 2 , 5 , 6 , 0.77 , ' 2019-02-28 '),
( 2 , 3 , 7 , 0.831 , ' 2019-03-01 '),
( 2 , 4 , 7 , 0.834 , ' 2018-11-25 '),
( 2 , 1 , 7 , 0.906 , ' 2019-03-02 '),
( 2 , 6 , 7 , 0.769 , ' 2019-02-26 '),
( 2 , 1 , 7 , 0.762 , ' 2018-12-30 '),
( 2 , 7 , 7 , 0.779 , ' 2019-01-15 '),
( 2 , 6 , 7 , 0.837 , ' 2018-11-25 '),
( 2 , 5 , 7 , 0.854 , ' 2019-02-27 '),
( 2 , 2 , 7 , 0.874 , ' 2019-02-26 '),
( 2 , 1 , 7 , 0.766 , ' 2019-02-25 '),
( 2 , 3 , 7 , 0.853 , ' 2019-02-28 '),
( 3 , 4 , 1 , 1.495 , ' 2019-02-25 '),
( 3 , 3 , 1 , 1.468 , ' 2019-03-02 '),
( 3 , 7 , 1 , 1.568 , ' 2018-11-25 '),
( 3 , 6 , 1 , 1.594 , ' 2019-03-03 '),
( 3 , 6 , 1 , 1.49 , ' 2018-12-30 '),
( 3 , 6 , 1 , 1.544 , ' 2019-01-15 '),
( 3 , 1 , 1 , 1.47 , ' 2019-01-17 '),
( 3 , 8 , 1 , 1.531 , ' 2019-02-10 '),
( 3 , 1 , 1 , 1.59 , ' 2019-01-17 '),
( 3 , 2 , 1 , 1.473 , ' 2019-02-28 '),
( 3 , 6 , 1 , 1.507 , ' 2019-02-11 '),
( 3 , 1 , 1 , 1.453 , ' 2019-01-15 '),
( 3 , 2 , 1 , 1.532 , ' 2019-03-01 '),
( 3 , 8 , 1 , 1.584 , ' 2018-11-25 '),
( 3 , 2 , 2 , 1.611 , ' 2019-02-28 '),
( 3 , 2 , 2 , 1.681 , ' 2019-02-28 '),
( 3 , 5 , 2 , 1.651 , ' 2019-03-01 '),
( 3 , 1 , 2 , 1.616 , ' 2019-01-17 '),
( 3 , 5 , 2 , 1.6 , ' 2019-03-01 '),
( 3 , 2 , 2 , 1.678 , ' 2018-12-30 '),
( 3 , 3 , 2 , 1.552 , ' 2019-02-10 '),
( 3 , 1 , 2 , 1.747 , ' 2019-02-27 '),
( 3 , 7 , 2 , 1.737 , ' 2019-01-17 '),
( 3 , 1 , 2 , 1.65 , ' 2019-02-17 '),
( 3 , 5 , 2 , 1.61 , ' 2018-11-25 '),
( 3 , 6 , 3 , 1.827 , ' 2019-03-03 '),
( 3 , 3 , 3 , 1.892 , ' 2019-01-30 '),
( 3 , 1 , 3 , 1.891 , ' 2019-03-01 '),
( 3 , 6 , 3 , 1.763 , ' 2019-02-26 '),
( 3 , 5 , 3 , 1.783 , ' 2019-01-17 '),
( 3 , 5 , 3 , 1.74 , ' 2019-02-17 '),
( 3 , 8 , 3 , 1.812 , ' 2019-03-04 '),
( 3 , 2 , 3 , 1.686 , ' 2019-03-04 '),
( 3 , 5 , 3 , 1.888 , ' 2018-12-30 '),
( 3 , 5 , 3 , 1.879 , ' 2019-02-25 '),
( 3 , 4 , 3 , 1.877 , ' 2019-03-03 '),
( 3 , 7 , 3 , 1.844 , ' 2019-01-23 '),
( 3 , 1 , 4 , 1.272 , ' 2019-03-04 '),
( 3 , 7 , 4 , 1.34 , ' 2019-01-30 '),
( 3 , 8 , 4 , 1.286 , ' 2018-12-30 '),
( 3 , 4 , 4 , 1.38 , ' 2019-02-27 '),
( 3 , 8 , 4 , 1.336 , ' 2019-02-10 '),
( 3 , 1 , 4 , 1.295 , ' 2019-01-17 '),
( 3 , 2 , 4 , 1.327 , ' 2019-01-23 '),
( 3 , 4 , 4 , 1.332 , ' 2018-11-25 '),
( 3 , 4 , 4 , 1.372 , ' 2019-02-26 '),
( 3 , 6 , 4 , 1.265 , ' 2019-02-26 '),
( 3 , 3 , 5 , 1.464 , ' 2019-03-03 '),
( 3 , 8 , 5 , 1.41 , ' 2019-02-27 '),
( 3 , 8 , 5 , 1.432 , ' 2019-02-11 '),
( 3 , 3 , 5 , 1.486 , ' 2019-03-04 '),
( 3 , 5 , 5 , 1.403 , ' 2019-03-04 '),
( 3 , 7 , 5 , 1.437 , ' 2019-01-17 '),
( 3 , 8 , 5 , 1.471 , ' 2019-02-27 '),
( 3 , 8 , 5 , 1.475 , ' 2019-02-17 '),
( 3 , 8 , 5 , 1.431 , ' 2019-01-30 '),
( 3 , 5 , 5 , 1.481 , ' 2019-01-30 '),
( 3 , 5 , 5 , 1.493 , ' 2019-02-28 '),
( 3 , 5 , 5 , 1.362 , ' 2019-01-30 '),
( 3 , 6 , 5 , 1.433 , ' 2019-02-27 '),
( 3 , 6 , 6 , 0.743 , ' 2018-11-25 '),
( 3 , 7 , 6 , 0.745 , ' 2019-02-17 '),
( 3 , 7 , 6 , 0.74 , ' 2019-02-27 '),
( 3 , 1 , 6 , 0.744 , ' 2019-02-27 '),
( 3 , 3 , 6 , 0.667 , ' 2019-03-04 '),
( 3 , 2 , 6 , 0.668 , ' 2018-12-30 '),
( 3 , 6 , 6 , 0.788 , ' 2019-02-11 '),
( 3 , 2 , 6 , 0.72 , ' 2019-01-30 '),
( 3 , 4 , 6 , 0.798 , ' 2019-01-15 '),
( 3 , 4 , 6 , 0.662 , ' 2019-02-27 '),
( 3 , 1 , 6 , 0.663 , ' 2019-02-27 '),

( 3 , 5 , 6 , 0.671 , ' 2019-02-28 '),
( 3 , 8 , 6 , 0.784 , ' 2018-12-30 '),
( 3 , 2 , 6 , 0.776 , ' 2019-01-15 '),
( 3 , 5 , 6 , 0.731 , ' 2018-11-25 '),
( 3 , 6 , 7 , 0.888 , ' 2019-02-26 '),
( 3 , 7 , 7 , 0.89 , ' 2019-03-04 '),
( 3 , 2 , 7 , 0.903 , ' 2019-02-11 '),
( 3 , 7 , 7 , 0.82 , ' 2019-02-27 '),
( 3 , 2 , 7 , 0.825 , ' 2019-02-25 '),
( 3 , 1 , 7 , 0.857 , ' 2019-02-28 '),
( 3 , 6 , 7 , 0.786 , ' 2019-01-15 '),
( 3 , 4 , 7 , 0.81 , ' 2019-03-02 '),
( 3 , 3 , 7 , 0.876 , ' 2019-02-03 '),
( 3 , 3 , 7 , 0.771 , ' 2019-02-03 '),
( 4 , 6 , 1 , 1.572 , ' 2019-03-04 '),
( 4 , 2 , 1 , 1.469 , ' 2018-11-25 '),
( 4 , 8 , 1 , 1.535 , ' 2019-01-17 '),
( 4 , 5 , 1 , 1.51 , ' 2019-02-11 '),
( 4 , 2 , 1 , 1.48 , ' 2019-03-02 '),
( 4 , 1 , 1 , 1.465 , ' 2018-11-25 '),
( 4 , 8 , 1 , 1.547 , ' 2019-03-01 '),
( 4 , 7 , 1 , 1.491 , ' 2019-03-03 '),
( 4 , 6 , 1 , 1.542 , ' 2019-01-30 '),
( 4 , 4 , 1 , 1.472 , ' 2019-03-04 '),
( 4 , 4 , 1 , 1.515 , ' 2019-03-01 '),
( 4 , 4 , 1 , 1.577 , ' 2019-02-17 '),
( 4 , 4 , 2 , 1.64 , ' 2019-01-30 '),
( 4 , 3 , 2 , 1.644 , ' 2019-02-17 '),
( 4 , 3 , 2 , 1.641 , ' 2019-02-10 '),
( 4 , 1 , 2 , 1.63 , ' 2019-01-30 '),
( 4 , 2 , 2 , 1.721 , ' 2019-01-23 '),
( 4 , 1 , 2 , 1.714 , ' 2019-03-02 '),
( 4 , 6 , 2 , 1.708 , ' 2019-01-30 '),
( 4 , 4 , 2 , 1.598 , ' 2019-02-26 '),
( 4 , 2 , 3 , 1.734 , ' 2019-03-01 '),
( 4 , 3 , 3 , 1.753 , ' 2019-02-26 '),
( 4 , 2 , 3 , 1.707 , ' 2019-02-11 '),
( 4 , 6 , 3 , 1.838 , ' 2019-02-10 '),
( 4 , 1 , 3 , 1.847 , ' 2019-03-01 '),
( 4 , 4 , 3 , 1.781 , ' 2019-03-02 '),
( 4 , 6 , 3 , 1.821 , ' 2019-02-10 '),
( 4 , 4 , 4 , 1.255 , ' 2019-01-17 '),
( 4 , 2 , 4 , 1.325 , ' 2019-02-28 '),
( 4 , 8 , 4 , 1.355 , ' 2019-03-02 '),
( 4 , 1 , 4 , 1.297 , ' 2018-11-25 '),
( 4 , 3 , 4 , 1.324 , ' 2019-02-26 '),
( 4 , 8 , 4 , 1.318 , ' 2018-11-25 '),
( 4 , 3 , 4 , 1.279 , ' 2018-12-30 '),
( 4 , 6 , 4 , 1.292 , ' 2019-01-17 '),
( 4 , 4 , 4 , 1.296 , ' 2019-02-25 '),
( 4 , 2 , 5 , 1.389 , ' 2019-02-28 '),
( 4 , 8 , 5 , 1.438 , ' 2019-02-28 '),
( 4 , 4 , 5 , 1.484 , ' 2019-02-28 '),
( 4 , 8 , 5 , 1.425 , ' 2019-02-25 '),
( 4 , 3 , 5 , 1.448 , ' 2019-02-26 '),
( 4 , 3 , 5 , 1.412 , ' 2019-02-03 '),
( 4 , 2 , 5 , 1.406 , ' 2019-03-03 '),
( 4 , 6 , 5 , 1.364 , ' 2019-02-03 '),
( 4 , 6 , 6 , 0.661 , ' 2019-03-04 '),
( 4 , 3 , 6 , 0.758 , ' 2019-01-15 '),
( 4 , 3 , 6 , 0.735 , ' 2019-01-30 '),
( 4 , 5 , 6 , 0.673 , ' 2019-03-02 '),
( 4 , 8 , 6 , 0.682 , ' 2019-03-04 '),
( 4 , 4 , 6 , 0.754 , ' 2019-02-03 '),
( 4 , 1 , 6 , 0.789 , ' 2019-01-23 '),
( 4 , 5 , 6 , 0.757 , ' 2018-12-30 '),
( 4 , 4 , 6 , 0.808 , ' 2019-03-01 '),
( 4 , 6 , 6 , 0.797 , ' 2019-02-25 '),
( 4 , 2 , 6 , 0.775 , ' 2019-02-10 '),
( 4 , 4 , 6 , 0.659 , ' 2019-03-01 '),
( 4 , 7 , 7 , 0.869 , ' 2019-02-03 '),
( 4 , 7 , 7 , 0.851 , ' 2019-02-10 '),
( 4 , 8 , 7 , 0.844 , ' 2019-02-11 '),
( 4 , 7 , 7 , 0.855 , ' 2019-01-23 '),
( 4 , 1 , 7 , 0.867 , ' 2019-02-17 '),
( 4 , 8 , 7 , 0.856 , ' 2019-02-17 '),
( 4 , 6 , 7 , 0.83 , ' 2019-02-17 '),
( 4 , 1 , 7 , 0.761 , ' 2019-02-25 '),
( 4 , 2 , 7 , 0.799 , ' 2019-03-04 '),
( 4 , 5 , 7 , 0.79 , ' 2019-03-04 '),
( 4 , 8 , 7 , 0.889 , ' 2019-03-04 '),
( 5 , 3 , 1 , 1.522 , ' 2019-03-01 '),
( 5 , 1 , 1 , 1.477 , ' 2019-01-23 '),
( 5 , 1 , 1 , 1.474 , ' 2018-12-30 '),
( 5 , 6 , 1 , 1.565 , ' 2019-03-02 '),
( 5 , 1 , 1 , 1.573 , ' 2019-02-25 '),
( 5 , 3 , 1 , 1.579 , ' 2018-12-30 '),
( 5 , 8 , 1 , 1.512 , ' 2019-02-26 '),
( 5 , 7 , 1 , 1.554 , ' 2019-02-27 '),
( 5 , 5 , 1 , 1.534 , ' 2019-03-02 '),
( 5 , 4 , 1 , 1.571 , ' 2019-03-02 '),
( 5 , 8 , 1 , 1.567 , ' 2019-02-27 '),
( 5 , 7 , 2 , 1.647 , ' 2019-02-10 '),
( 5 , 6 , 2 , 1.605 , ' 2019-02-17 '),
( 5 , 8 , 2 , 1.717 , ' 2019-02-27 '),
( 5 , 1 , 2 , 1.582 , ' 2019-02-17 '),
( 5 , 5 , 2 , 1.673 , ' 2019-02-03 '),
( 5 , 2 , 2 , 1.729 , ' 2019-03-02 '),
( 5 , 8 , 2 , 1.683 , ' 2019-03-04 '),
( 5 , 1 , 2 , 1.575 , ' 2019-02-03 '),
( 5 , 4 , 2 , 1.642 , ' 2019-02-03 '),
( 5 , 4 , 2 , 1.589 , ' 2018-12-30 '),
( 5 , 7 , 3 , 1.85 , ' 2019-01-30 '),
( 5 , 7 , 3 , 1.75 , ' 2019-02-27 '),
( 5 , 3 , 3 , 1.813 , ' 2019-02-28 '),
( 5 , 1 , 3 , 1.852 , ' 2019-03-03 '),
( 5 , 7 , 3 , 1.76 , ' 2019-02-10 '),
( 5 , 1 , 3 , 1.83 , ' 2019-02-25 '),
( 5 , 6 , 3 , 1.794 , ' 2019-01-23 '),
( 5 , 2 , 3 , 1.848 , ' 2019-02-25 '),
( 5 , 4 , 3 , 1.758 , ' 2019-03-03 '),
( 5 , 2 , 3 , 1.768 , ' 2019-03-01 '),
( 5 , 3 , 3 , 1.751 , ' 2019-03-01 '),
( 5 , 3 , 3 , 1.805 , ' 2019-02-27 '),
( 5 , 8 , 4 , 1.323 , ' 2019-02-03 '),
( 5 , 6 , 4 , 1.283 , ' 2019-03-04 '),
( 5 , 3 , 4 , 1.302 , ' 2019-02-17 '),
( 5 , 4 , 4 , 1.269 , ' 2019-02-27 '),
( 5 , 7 , 4 , 1.288 , ' 2019-02-03 '),
( 5 , 8 , 4 , 1.308 , ' 2019-02-10 '),
( 5 , 1 , 5 , 1.476 , ' 2019-01-23 '),
( 5 , 1 , 5 , 1.408 , ' 2019-03-04 '),
( 5 , 2 , 5 , 1.489 , ' 2019-02-28 '),
( 5 , 1 , 5 , 1.368 , ' 2019-02-25 '),
( 5 , 4 , 5 , 1.423 , ' 2018-12-30 '),
( 5 , 4 , 6 , 0.725 , ' 2019-02-11 '),
( 5 , 3 , 6 , 0.748 , ' 2019-01-17 '),
( 5 , 5 , 6 , 0.791 , ' 2019-01-17 '),
( 5 , 7 , 6 , 0.751 , ' 2019-01-17 '),
( 5 , 1 , 6 , 0.783 , ' 2019-02-28 '),
( 5 , 4 , 6 , 0.724 , ' 2018-12-30 '),
( 5 , 7 , 6 , 0.654 , ' 2019-02-17 '),
( 5 , 2 , 6 , 0.704 , ' 2019-01-30 '),
( 5 , 7 , 6 , 0.686 , ' 2019-02-27 '),
( 5 , 7 , 7 , 0.881 , ' 2019-02-17 '),
( 5 , 4 , 7 , 0.929 , ' 2019-01-15 '),
( 5 , 6 , 7 , 0.777 , ' 2019-02-28 '),
( 5 , 3 , 7 , 0.902 , ' 2019-03-04 '),
( 5 , 1 , 7 , 0.917 , ' 2018-11-25 '),
( 5 , 2 , 7 , 0.763 , ' 2019-02-17 '),
( 5 , 3 , 7 , 0.92 , ' 2019-02-17 '),
( 5 , 5 , 7 , 0.862 , ' 2019-02-27 '),
( 5 , 6 , 7 , 0.908 , ' 2019-02-25 '),
( 5 , 6 , 7 , 0.811 , ' 2019-01-30 '),
( 5 , 2 , 7 , 0.927 , ' 2019-02-28 '),
( 6 , 6 , 1 , 1.538 , ' 2019-01-17 '),
( 6 , 4 , 1 , 1.566 , ' 2019-03-04 '),
( 6 , 8 , 1 , 1.508 , ' 2019-02-17 '),
( 6 , 8 , 1 , 1.466 , ' 2019-01-17 '),
( 6 , 4 , 1 , 1.454 , ' 2019-03-01 '),
( 6 , 7 , 1 , 1.467 , ' 2019-01-17 '),
( 6 , 1 , 1 , 1.578 , ' 2019-01-23 '),
( 6 , 1 , 1 , 1.545 , ' 2018-12-30 '),
( 6 , 6 , 2 , 1.668 , ' 2019-01-30 '),
( 6 , 3 , 2 , 1.665 , ' 2019-02-26 '),
( 6 , 4 , 2 , 1.67 , ' 2019-02-10 '),
( 6 , 7 , 3 , 1.787 , ' 2019-01-15 '),
( 6 , 4 , 3 , 1.777 , ' 2019-01-30 '),
( 6 , 5 , 3 , 1.825 , ' 2019-02-03 '),
( 6 , 1 , 3 , 1.816 , ' 2019-01-30 '),
( 6 , 1 , 3 , 1.749 , ' 2019-02-10 '),
( 6 , 5 , 3 , 1.899 , ' 2019-02-10 '),
( 6 , 2 , 3 , 1.757 , ' 2019-03-04 '),
( 6 , 8 , 3 , 1.724 , ' 2019-01-23 '),
( 6 , 7 , 3 , 1.684 , ' 2019-03-01 '),
( 6 , 3 , 3 , 1.761 , ' 2019-02-25 '),
( 6 , 5 , 3 , 1.767 , ' 2019-02-27 '),
( 6 , 8 , 3 , 1.894 , ' 2019-01-17 '),
( 6 , 5 , 4 , 1.343 , ' 2019-02-10 '),
( 6 , 6 , 4 , 1.264 , ' 2018-11-25 '),
( 6 , 5 , 4 , 1.275 , ' 2019-02-25 '),
( 6 , 8 , 4 , 1.37 , ' 2019-02-25 '),
( 6 , 1 , 4 , 1.251 , ' 2019-02-25 '),
( 6 , 7 , 4 , 1.366 , ' 2019-02-10 '),
( 6 , 8 , 4 , 1.347 , ' 2019-03-03 '),
( 6 , 1 , 4 , 1.354 , ' 2019-03-04 '),
( 6 , 8 , 4 , 1.361 , ' 2019-02-26 '),
( 6 , 6 , 4 , 1.349 , ' 2019-02-10 '),
( 6 , 7 , 4 , 1.365 , ' 2019-02-10 '),
( 6 , 3 , 5 , 1.392 , ' 2019-03-03 '),
( 6 , 5 , 5 , 1.387 , ' 2018-12-30 '),
( 6 , 3 , 5 , 1.413 , ' 2019-02-03 '),
( 6 , 4 , 5 , 1.401 , ' 2019-02-03 '),
( 6 , 7 , 5 , 1.452 , ' 2019-02-25 '),
( 6 , 2 , 6 , 0.712 , ' 2019-03-01 '),
( 6 , 6 , 6 , 0.719 , ' 2019-02-28 '),
( 6 , 6 , 6 , 0.729 , ' 2019-02-26 '),
( 6 , 1 , 6 , 0.694 , ' 2019-03-04 '),
( 6 , 7 , 7 , 0.914 , ' 2019-02-28 '),
( 6 , 2 , 7 , 0.895 , ' 2018-11-25 '),
( 6 , 5 , 7 , 0.924 , ' 2018-12-30 '),
( 6 , 1 , 7 , 0.911 , ' 2018-12-30 '),
( 6 , 1 , 7 , 0.872 , ' 2019-01-30 '),
( 6 , 4 , 7 , 0.822 , ' 2019-01-15 '),
( 6 , 1 , 7 , 0.76 , ' 2019-02-28 '),
( 6 , 1 , 7 , 0.803 , ' 2019-01-30 '),
( 6 , 7 , 7 , 0.852 , ' 2018-12-30 '),
( 6 , 4 , 7 , 0.875 , ' 2018-12-30 '),
( 7 , 4 , 1 , 1.504 , ' 2019-02-11 '),
( 7 , 8 , 1 , 1.536 , ' 2018-11-25 '),
( 7 , 6 , 1 , 1.518 , ' 2019-01-15 '),
( 7 , 7 , 1 , 1.54 , ' 2019-01-17 '),
( 7 , 3 , 2 , 1.601 , ' 2019-01-15 '),
( 7 , 1 , 2 , 1.666 , ' 2019-02-17 '),
( 7 , 7 , 2 , 1.592 , ' 2019-02-26 '),
( 7 , 8 , 2 , 1.631 , ' 2019-02-27 '),
( 7 , 8 , 2 , 1.723 , ' 2019-03-02 '),
( 7 , 4 , 2 , 1.609 , ' 2019-03-02 '),
( 7 , 2 , 2 , 1.624 , ' 2019-02-11 '),
( 7 , 8 , 2 , 1.638 , ' 2019-02-28 '),
( 7 , 4 , 2 , 1.709 , ' 2019-01-15 '),
( 7 , 5 , 2 , 1.698 , ' 2019-03-01 '),
( 7 , 5 , 2 , 1.745 , ' 2018-12-30 '),
( 7 , 2 , 3 , 1.722 , ' 2019-03-02 '),
( 7 , 6 , 3 , 1.835 , ' 2019-02-28 '),
( 7 , 7 , 3 , 1.881 , ' 2019-02-17 '),
( 7 , 2 , 3 , 1.682 , ' 2019-01-30 '),
( 7 , 2 , 3 , 1.779 , ' 2019-02-28 '),
( 7 , 7 , 3 , 1.771 , ' 2019-02-11 '),
( 7 , 6 , 3 , 1.868 , ' 2019-03-04 '),
( 7 , 7 , 4 , 1.369 , ' 2019-02-11 '),
( 7 , 6 , 4 , 1.331 , ' 2019-02-27 '),
( 7 , 5 , 4 , 1.374 , ' 2019-01-15 '),
( 7 , 3 , 4 , 1.26 , ' 2018-12-30 '),
( 7 , 1 , 4 , 1.353 , ' 2019-02-27 '),

( 7 , 5 , 4 , 1.386 , ' 2019-02-11 '),
( 7 , 1 , 4 , 1.254 , ' 2018-12-30 '),
( 7 , 4 , 5 , 1.434 , ' 2019-03-02 '),
( 7 , 2 , 5 , 1.443 , ' 2018-11-25 '),
( 7 , 7 , 5 , 1.397 , ' 2019-01-30 '),
( 7 , 4 , 5 , 1.405 , ' 2019-02-28 '),
( 7 , 7 , 6 , 0.802 , ' 2019-02-17 '),
( 7 , 3 , 6 , 0.736 , ' 2019-01-15 '),
( 7 , 4 , 6 , 0.813 , ' 2019-03-03 '),
( 7 , 2 , 6 , 0.651 , ' 2019-02-17 '),
( 7 , 2 , 6 , 0.681 , ' 2018-11-25 '),
( 7 , 1 , 6 , 0.706 , ' 2019-01-17 '),
( 7 , 2 , 6 , 0.708 , ' 2018-11-25 '),
( 7 , 7 , 7 , 0.838 , ' 2019-01-30 '),
( 7 , 3 , 7 , 0.87 , ' 2019-01-17 '),
( 7 , 6 , 7 , 0.817 , ' 2019-01-30 '),
( 7 , 4 , 7 , 0.773 , ' 2019-02-17 '),
( 7 , 2 , 7 , 0.839 , ' 2019-01-15 '),
( 7 , 3 , 7 , 0.866 , ' 2019-02-11 '),
( 7 , 2 , 7 , 0.901 , ' 2019-03-01 '),
( 8 , 3 , 1 , 1.569 , ' 2018-12-30 '),
( 8 , 7 , 1 , 1.461 , ' 2019-02-28 '),
( 8 , 1 , 1 , 1.559 , ' 2019-03-02 '),
( 8 , 1 , 1 , 1.529 , ' 2018-12-30 '),
( 8 , 3 , 1 , 1.5 , ' 2019-02-25 '),
( 8 , 5 , 2 , 1.742 , ' 2019-02-28 '),
( 8 , 3 , 2 , 1.727 , ' 2019-01-17 '),
( 8 , 5 , 2 , 1.716 , ' 2019-02-27 '),
( 8 , 5 , 2 , 1.561 , ' 2019-02-26 '),
( 8 , 7 , 2 , 1.735 , ' 2018-11-25 '),
( 8 , 6 , 2 , 1.689 , ' 2019-02-10 '),
( 8 , 5 , 2 , 1.648 , ' 2019-03-02 '),
( 8 , 5 , 2 , 1.669 , ' 2019-01-23 '),
( 8 , 2 , 2 , 1.731 , ' 2018-11-25 '),
( 8 , 6 , 3 , 1.866 , ' 2019-02-27 '),
( 8 , 4 , 3 , 1.788 , ' 2019-03-01 '),
( 8 , 5 , 3 , 1.69 , ' 2019-03-03 '),
( 8 , 6 , 3 , 1.828 , ' 2019-02-25 '),
( 8 , 8 , 3 , 1.822 , ' 2019-03-02 '),
( 8 , 1 , 3 , 1.713 , ' 2019-03-03 '),
( 8 , 7 , 3 , 1.818 , ' 2019-02-17 '),
( 8 , 4 , 3 , 1.865 , ' 2019-03-02 '),
( 8 , 3 , 3 , 1.855 , ' 2019-02-10 '),
( 8 , 5 , 3 , 1.786 , ' 2019-02-28 '),
( 8 , 6 , 3 , 1.883 , ' 2019-01-23 '),
( 8 , 6 , 3 , 1.842 , ' 2019-02-26 '),
( 8 , 1 , 4 , 1.252 , ' 2019-03-04 '),
( 8 , 2 , 4 , 1.274 , ' 2019-01-23 '),
( 8 , 6 , 4 , 1.319 , ' 2019-02-17 '),
( 8 , 4 , 4 , 1.379 , ' 2019-02-26 '),
( 8 , 8 , 4 , 1.328 , ' 2018-12-30 '),
( 8 , 5 , 4 , 1.373 , ' 2019-02-26 '),
( 8 , 3 , 4 , 1.345 , ' 2019-02-03 '),
( 8 , 6 , 5 , 1.498 , ' 2019-03-04 '),
( 8 , 2 , 5 , 1.428 , ' 2019-01-30 '),
( 8 , 3 , 5 , 1.42 , ' 2019-02-11 '),
( 8 , 2 , 5 , 1.494 , ' 2019-03-01 '),
( 8 , 6 , 5 , 1.414 , ' 2019-02-10 '),
( 8 , 4 , 5 , 1.391 , ' 2019-03-01 '),
( 8 , 5 , 6 , 0.721 , ' 2018-11-25 '),
( 8 , 6 , 6 , 0.732 , ' 2019-01-17 '),
( 8 , 1 , 6 , 0.806 , ' 2019-02-11 '),
( 8 , 5 , 6 , 0.693 , ' 2019-02-27 '),
( 8 , 1 , 7 , 0.921 , ' 2019-03-04 '),
( 8 , 2 , 7 , 0.916 , ' 2018-12-30 '),
( 8 , 2 , 7 , 0.909 , ' 2019-02-17 '),
( 8 , 1 , 7 , 0.849 , ' 2019-02-26 '),
( 8 , 1 , 7 , 0.823 , ' 2019-02-11 '),
( 9 , 6 , 1 , 1.546 , ' 2018-12-30 '),
( 9 , 1 , 1 , 1.539 , ' 2019-02-26 '),
( 9 , 4 , 1 , 1.556 , ' 2019-02-03 '),
( 9 , 6 , 1 , 1.597 , ' 2018-11-25 '),
( 9 , 6 , 1 , 1.517 , ' 2019-01-15 '),
( 9 , 6 , 2 , 1.701 , ' 2019-02-11 '),
( 9 , 3 , 2 , 1.697 , ' 2019-01-30 '),
( 9 , 1 , 2 , 1.612 , ' 2019-01-23 '),
( 9 , 2 , 2 , 1.72 , ' 2019-01-17 '),
( 9 , 6 , 2 , 1.694 , ' 2019-01-15 '),
( 9 , 7 , 2 , 1.718 , ' 2019-02-10 '),
( 9 , 3 , 2 , 1.695 , ' 2019-01-30 '),
( 9 , 5 , 3 , 1.817 , ' 2018-12-30 '),
( 9 , 8 , 3 , 1.693 , ' 2019-01-17 '),
( 9 , 8 , 3 , 1.702 , ' 2019-01-23 '),
( 9 , 2 , 3 , 1.867 , ' 2019-03-01 '),
( 9 , 2 , 3 , 1.746 , ' 2019-03-04 '),
( 9 , 6 , 3 , 1.688 , ' 2019-01-17 '),
( 9 , 7 , 4 , 1.276 , ' 2019-02-11 '),
( 9 , 2 , 4 , 1.291 , ' 2019-02-25 '),
( 9 , 8 , 4 , 1.263 , ' 2019-03-03 '),
( 9 , 2 , 4 , 1.262 , ' 2019-02-17 '),
( 9 , 8 , 4 , 1.322 , ' 2019-03-01 '),
( 9 , 2 , 5 , 1.457 , ' 2019-02-26 '),
( 9 , 8 , 5 , 1.451 , ' 2018-11-25 '),
( 9 , 1 , 5 , 1.404 , ' 2019-01-17 '),
( 9 , 3 , 6 , 0.747 , ' 2019-03-04 '),
( 9 , 5 , 6 , 0.73 , ' 2019-03-03 '),
( 9 , 5 , 6 , 0.707 , ' 2018-11-25 '),
( 9 , 4 , 6 , 0.688 , ' 2019-02-17 '),
( 9 , 6 , 6 , 0.722 , ' 2019-02-25 '),
( 9 , 4 , 6 , 0.793 , ' 2019-02-17 '),
( 9 , 8 , 7 , 0.892 , ' 2019-02-25 '),
( 9 , 4 , 7 , 0.833 , ' 2019-01-15 '),
( 9 , 5 , 7 , 0.88 , ' 2019-03-01 '),
( 9 , 2 , 7 , 0.899 , ' 2019-03-02 '),
( 10 , 1 , 1 , 1.587 , ' 2019-02-25 '),
( 10 , 6 , 1 , 1.548 , ' 2019-02-11 '),
( 10 , 7 , 1 , 1.519 , ' 2019-02-11 '),
( 10 , 5 , 1 , 1.528 , ' 2019-02-28 '),
( 10 , 3 , 2 , 1.661 , ' 2018-12-30 '),
( 10 , 4 , 2 , 1.62 , ' 2019-02-10 '),
( 10 , 8 , 2 , 1.585 , ' 2019-02-10 '),
( 10 , 2 , 2 , 1.744 , ' 2019-02-17 '),
( 10 , 3 , 3 , 1.798 , ' 2019-03-03 '),
( 10 , 6 , 3 , 1.89 , ' 2019-01-23 '),
( 10 , 4 , 3 , 1.793 , ' 2019-01-15 '),
( 10 , 5 , 3 , 1.884 , ' 2019-02-11 '),
( 10 , 5 , 3 , 1.9 , ' 2019-03-03 '),
( 10 , 6 , 3 , 1.799 , ' 2019-02-27 '),
( 10 , 6 , 4 , 1.305 , ' 2019-01-15 '),
( 10 , 6 , 4 , 1.301 , ' 2019-02-10 '),
( 10 , 7 , 4 , 1.277 , ' 2019-01-23 '),
( 10 , 6 , 4 , 1.341 , ' 2018-11-25 '),
( 10 , 4 , 4 , 1.3 , ' 2019-03-03 '),
( 10 , 8 , 4 , 1.333 , ' 2019-01-30 '),
( 10 , 6 , 4 , 1.257 , ' 2019-01-30 '),
( 10 , 3 , 4 , 1.346 , ' 2019-02-28 '),
( 10 , 2 , 4 , 1.259 , ' 2018-12-30 '),
( 10 , 1 , 5 , 1.359 , ' 2019-03-03 '),
( 10 , 1 , 5 , 1.496 , ' 2018-12-30 '),
( 10 , 3 , 5 , 1.444 , ' 2019-01-23 '),
( 10 , 6 , 5 , 1.415 , ' 2019-02-03 '),
( 10 , 7 , 6 , 0.805 , ' 2018-12-30 '),
( 10 , 7 , 6 , 0.734 , ' 2019-01-30 '),
( 10 , 4 , 6 , 0.701 , ' 2019-02-11 '),
( 10 , 4 , 7 , 0.863 , ' 2019-01-23 '),
( 10 , 1 , 7 , 0.795 , ' 2019-01-17 '),
( 10 , 7 , 7 , 0.845 , ' 2019-03-04 '),
( 10 , 1 , 7 , 0.836 , ' 2018-12-30 '),
( 10 , 6 , 7 , 0.819 , ' 2019-02-17 '),
( 10 , 2 , 7 , 0.93 , ' 2019-03-01 '),
( 11 , 7 , 1 , 1.478 , ' 2019-02-11 '),
( 11 , 1 , 1 , 1.523 , ' 2019-02-03 '),
( 11 , 4 , 2 , 1.664 , ' 2019-01-15 '),
( 11 , 5 , 2 , 1.646 , ' 2019-02-03 '),
( 11 , 5 , 2 , 1.639 , ' 2019-02-25 '),
( 11 , 6 , 2 , 1.706 , ' 2019-02-26 '),
( 11 , 4 , 3 , 1.873 , ' 2019-02-10 '),
( 11 , 5 , 3 , 1.887 , ' 2019-01-15 '),
( 11 , 5 , 3 , 1.795 , ' 2019-03-01 '),
( 11 , 8 , 3 , 1.845 , ' 2019-03-02 '),
( 11 , 4 , 3 , 1.752 , ' 2019-02-10 '),
( 11 , 6 , 3 , 1.782 , ' 2019-01-23 '),
( 11 , 5 , 3 , 1.796 , ' 2019-01-15 '),
( 11 , 5 , 3 , 1.73 , ' 2019-02-27 '),
( 11 , 2 , 3 , 1.869 , ' 2019-01-23 '),
( 11 , 8 , 4 , 1.348 , ' 2019-02-11 '),
( 11 , 6 , 4 , 1.313 , ' 2019-02-28 '),
( 11 , 4 , 5 , 1.449 , ' 2018-11-25 '),
( 11 , 3 , 5 , 1.399 , ' 2019-02-27 '),
( 11 , 4 , 5 , 1.429 , ' 2019-01-30 '),
( 11 , 3 , 6 , 0.705 , ' 2019-01-17 '),
( 11 , 7 , 6 , 0.801 , ' 2019-03-04 '),
( 11 , 2 , 6 , 0.695 , ' 2019-02-26 '),
( 11 , 6 , 6 , 0.727 , ' 2019-02-25 '),
( 11 , 1 , 7 , 0.915 , ' 2019-02-10 '),
( 11 , 8 , 7 , 0.85 , ' 2019-02-17 '),
( 11 , 3 , 7 , 0.887 , ' 2019-03-01 '),
( 11 , 1 , 7 , 0.841 , ' 2019-01-15 '),
( 11 , 3 , 7 , 0.907 , ' 2019-02-11 '),
( 11 , 2 , 7 , 0.882 , ' 2019-02-03 '),
( 11 , 5 , 7 , 0.877 , ' 2019-03-03 '),
( 11 , 3 , 7 , 0.865 , ' 2019-02-17 '),
( 12 , 4 , 1 , 1.56 , ' 2019-03-02 '),
( 12 , 2 , 1 , 1.562 , ' 2019-01-17 '),
( 12 , 1 , 1 , 1.586 , ' 2019-03-01 '),
( 12 , 1 , 2 , 1.603 , ' 2018-11-25 '),
( 12 , 8 , 2 , 1.725 , ' 2019-02-17 '),
( 12 , 6 , 3 , 1.87 , ' 2019-03-04 '),
( 12 , 3 , 3 , 1.78 , ' 2019-01-17 '),
( 12 , 1 , 3 , 1.815 , ' 2019-03-04 '),
( 12 , 3 , 3 , 1.856 , ' 2019-02-26 '),
( 12 , 4 , 3 , 1.755 , ' 2019-02-10 '),
( 12 , 8 , 3 , 1.775 , ' 2019-02-10 '),
( 12 , 4 , 4 , 1.377 , ' 2019-03-03 '),
( 12 , 6 , 4 , 1.289 , ' 2019-03-04 '),
( 12 , 1 , 4 , 1.266 , ' 2019-01-23 '),
( 12 , 3 , 4 , 1.293 , ' 2019-02-27 '),
( 12 , 5 , 4 , 1.344 , ' 2018-12-30 '),
( 12 , 7 , 5 , 1.419 , ' 2019-01-30 '),
( 12 , 4 , 5 , 1.441 , ' 2019-01-30 '),
( 12 , 6 , 5 , 1.418 , ' 2019-03-04 '),
( 12 , 3 , 5 , 1.398 , ' 2019-02-28 '),
( 12 , 5 , 6 , 0.709 , ' 2019-02-27 '),
( 12 , 7 , 6 , 0.742 , ' 2018-11-25 '),
( 12 , 5 , 6 , 0.684 , ' 2019-01-17 '),
( 12 , 6 , 6 , 0.717 , ' 2019-02-03 '),
( 12 , 4 , 6 , 0.728 , ' 2019-02-27 '),
( 12 , 1 , 6 , 0.714 , ' 2019-03-01 '),
( 12 , 3 , 6 , 0.656 , ' 2019-01-17 '),
( 12 , 6 , 6 , 0.752 , ' 2019-01-15 '),
( 12 , 6 , 7 , 0.873 , ' 2019-03-03 '),
( 12 , 3 , 7 , 0.885 , ' 2019-02-28 '),
( 13 , 5 , 1 , 1.524 , ' 2019-02-03 '),
( 13 , 3 , 2 , 1.719 , ' 2019-02-03 '),
( 13 , 6 , 2 , 1.679 , ' 2019-03-03 '),
( 13 , 3 , 2 , 1.608 , ' 2019-01-17 '),
( 13 , 3 , 3 , 1.882 , ' 2019-01-15 '),
( 13 , 8 , 3 , 1.861 , ' 2019-03-01 '),
( 13 , 5 , 3 , 1.762 , ' 2019-02-26 '),
( 13 , 4 , 3 , 1.871 , ' 2019-02-03 '),
( 13 , 8 , 4 , 1.298 , ' 2019-02-28 '),
( 13 , 5 , 4 , 1.315 , ' 2019-02-10 '),
( 13 , 5 , 4 , 1.351 , ' 2019-01-23 '),
( 13 , 7 , 5 , 1.35 , ' 2019-02-26 '),
( 13 , 8 , 5 , 1.402 , ' 2018-12-30 '),
( 13 , 5 , 6 , 0.759 , ' 2018-11-25 '),
( 13 , 3 , 6 , 0.657 , ' 2019-02-27 '),
( 13 , 2 , 6 , 0.677 , ' 2019-03-02 '),
( 13 , 8 , 6 , 0.816 , ' 2019-03-04 '),
( 13 , 6 , 6 , 0.679 , ' 2019-01-17 '),
( 13 , 4 , 7 , 0.828 , ' 2019-01-30 '),
( 13 , 8 , 7 , 0.809 , ' 2019-02-27 '),
( 13 , 8 , 7 , 0.871 , ' 2019-01-17 '),
( 13 , 1 , 7 , 0.8 , ' 2019-03-02 '),
( 13 , 5 , 7 , 0.926 , ' 2019-03-01 '),
( 14 , 8 , 1 , 1.52 , ' 2019-03-02 '),
( 14 , 5 , 2 , 1.662 , ' 2019-01-17 '),
( 14 , 3 , 2 , 1.551 , ' 2019-01-17 '),
( 14 , 5 , 2 , 1.621 , ' 2019-03-04 '),
( 14 , 2 , 3 , 1.759 , ' 2019-02-03 '),
( 14 , 7 , 3 , 1.743 , ' 2019-03-02 '),
( 14 , 1 , 3 , 1.754 , ' 2019-01-30 '),
( 14 , 6 , 3 , 1.824 , ' 2019-02-25 '),
( 14 , 2 , 3 , 1.819 , ' 2018-11-25 '),
( 14 , 7 , 4 , 1.358 , ' 2019-01-30 '),
( 14 , 3 , 4 , 1.307 , ' 2019-02-26 '),
( 14 , 7 , 4 , 1.311 , ' 2018-11-25 '),
( 14 , 1 , 6 , 0.713 , ' 2019-03-03 '),
( 14 , 1 , 6 , 0.718 , ' 2019-03-02 '),
( 14 , 8 , 6 , 0.78 , ' 2019-03-02 '),
( 14 , 5 , 7 , 0.922 , ' 2019-02-17 '),
( 15 , 8 , 2 , 1.675 , ' 2019-01-17 '),
( 15 , 5 , 2 , 1.619 , ' 2019-02-26 '),
( 15 , 4 , 3 , 1.802 , ' 2019-01-17 '),
( 15 , 1 , 3 , 1.774 , ' 2019-02-27 '),
( 15 , 8 , 3 , 1.715 , ' 2019-02-11 '),
( 15 , 2 , 3 , 1.836 , ' 2019-01-17 '),
( 15 , 5 , 3 , 1.807 , ' 2019-01-23 '),
( 15 , 3 , 3 , 1.82 , ' 2018-11-25 '),
( 15 , 7 , 4 , 1.321 , ' 2019-01-15 '),
( 15 , 6 , 4 , 1.271 , ' 2019-01-23 '),
( 15 , 2 , 6 , 0.702 , ' 2018-11-25 '),
( 15 , 2 , 6 , 0.733 , ' 2019-03-01 '),
( 15 , 4 , 6 , 0.755 , ' 2019-03-01 '),
( 15 , 8 , 7 , 0.829 , ' 2019-01-17 '),
( 15 , 2 , 7 , 0.842 , ' 2018-11-25 '),
( 15 , 6 , 7 , 0.847 , ' 2019-02-03 '),
( 16 , 8 , 2 , 1.614 , ' 2019-02-28 '),
( 16 , 2 , 2 , 1.656 , ' 2019-02-27 '),
( 16 , 5 , 2 , 1.629 , ' 2019-03-04 '),
( 16 , 8 , 2 , 1.711 , ' 2019-02-26 '),
( 16 , 7 , 2 , 1.618 , ' 2019-03-03 '),
( 16 , 3 , 2 , 1.615 , ' 2019-02-26 '),
( 16 , 2 , 2 , 1.626 , ' 2019-02-25 '),
( 16 , 7 , 3 , 1.832 , ' 2018-11-25 '),
( 16 , 2 , 3 , 1.726 , ' 2019-02-11 '),
( 16 , 5 , 3 , 1.705 , ' 2019-03-01 '),
( 16 , 7 , 3 , 1.837 , ' 2019-02-26 '),
( 16 , 7 , 5 , 1.46 , ' 2019-02-26 '),
( 16 , 7 , 7 , 0.893 , ' 2019-02-28 '),
( 16 , 6 , 7 , 0.905 , ' 2019-01-15 '),
( 16 , 8 , 7 , 0.879 , ' 2019-02-17 '),
( 16 , 2 , 7 , 0.883 , ' 2019-03-03 '),
( 16 , 7 , 7 , 0.858 , ' 2019-02-27 '),
( 17 , 5 , 2 , 1.602 , ' 2018-12-30 '),

( 17 , 2 , 3 , 1.846 , ' 2019-01-23 '),
( 17 , 8 , 3 , 1.803 , ' 2019-01-15 '),
( 17 , 4 , 3 , 1.896 , ' 2019-02-17 '),
( 17 , 1 , 3 , 1.853 , ' 2019-03-03 '),
( 17 , 8 , 4 , 1.261 , ' 2019-01-17 '),
( 17 , 3 , 4 , 1.337 , ' 2019-02-11 '),
( 17 , 4 , 4 , 1.335 , ' 2019-03-03 '),
( 17 , 8 , 5 , 1.462 , ' 2019-02-26 '),
( 17 , 8 , 5 , 1.375 , ' 2019-02-03 '),
( 17 , 6 , 6 , 0.687 , ' 2019-02-25 '),
( 17 , 4 , 6 , 0.666 , ' 2019-01-15 '),
( 17 , 1 , 7 , 0.897 , ' 2019-03-03 '),
( 17 , 5 , 7 , 0.923 , ' 2019-02-25 '),
( 17 , 7 , 7 , 0.894 , ' 2019-03-02 '),
( 18 , 8 , 1 , 1.527 , ' 2019-01-23 '),
( 18 , 2 , 1 , 1.502 , ' 2019-02-27 '),
( 18 , 6 , 1 , 1.564 , ' 2019-03-01 '),
( 18 , 8 , 2 , 1.606 , ' 2019-02-03 '),
( 18 , 2 , 2 , 1.677 , ' 2019-02-03 '),
( 18 , 3 , 2 , 1.676 , ' 2019-02-17 '),
( 18 , 1 , 2 , 1.635 , ' 2019-03-04 '),
( 18 , 1 , 3 , 1.858 , ' 2019-03-02 '),
( 18 , 3 , 3 , 1.792 , ' 2019-02-10 '),
( 18 , 8 , 3 , 1.733 , ' 2019-02-27 '),
( 18 , 7 , 3 , 1.885 , ' 2019-01-15 '),
( 18 , 8 , 4 , 1.314 , ' 2019-02-25 '),
( 18 , 8 , 4 , 1.304 , ' 2019-02-28 '),
( 18 , 2 , 4 , 1.326 , ' 2019-03-04 '),
( 18 , 2 , 5 , 1.436 , ' 2019-03-04 '),
( 18 , 2 , 5 , 1.446 , ' 2019-02-03 '),
( 18 , 7 , 6 , 0.676 , ' 2019-03-04 '),
( 19 , 7 , 1 , 1.503 , ' 2018-11-25 '),
( 19 , 5 , 1 , 1.513 , ' 2019-01-30 '),
( 19 , 2 , 3 , 1.897 , ' 2019-02-28 '),
( 19 , 4 , 3 , 1.826 , ' 2019-03-04 '),
( 19 , 4 , 3 , 1.893 , ' 2019-01-30 '),
( 19 , 2 , 3 , 1.841 , ' 2019-03-03 '),
( 19 , 6 , 4 , 1.268 , ' 2019-03-02 '),
( 19 , 7 , 4 , 1.339 , ' 2019-02-27 '),
( 19 , 8 , 5 , 1.396 , ' 2019-01-23 '),
( 19 , 3 , 6 , 0.68 , ' 2018-12-30 '),
( 19 , 7 , 6 , 0.699 , ' 2019-02-03 '),
( 19 , 1 , 6 , 0.716 , ' 2019-02-26 '),
( 19 , 6 , 6 , 0.737 , ' 2019-02-10 '),
( 19 , 1 , 6 , 0.665 , ' 2019-02-17 '),
( 20 , 6 , 2 , 1.628 , ' 2019-01-17 '),
( 20 , 8 , 2 , 1.655 , ' 2019-01-17 '),
( 20 , 5 , 2 , 1.7 , ' 2019-02-03 '),
( 20 , 1 , 2 , 1.657 , ' 2018-12-30 '),
( 20 , 3 , 3 , 1.84 , ' 2019-01-30 '),
( 20 , 8 , 3 , 1.804 , ' 2018-12-30 '),
( 20 , 1 , 3 , 1.814 , ' 2019-02-25 '),
( 20 , 1 , 6 , 0.723 , ' 2018-11-25 '),
( 20 , 8 , 7 , 0.919 , ' 2019-02-17 '),
( 20 , 7 , 7 , 0.91 , ' 2019-02-03 '),
( 21 , 1 , 2 , 1.604 , ' 2019-02-28 '),
( 21 , 3 , 2 , 1.634 , ' 2019-01-30 '),
( 21 , 7 , 3 , 1.843 , ' 2019-02-11 '),
( 21 , 4 , 3 , 1.874 , ' 2019-01-15 '),
( 21 , 2 , 4 , 1.29 , ' 2019-03-04 '),
( 21 , 2 , 5 , 1.416 , ' 2018-11-25 '),
( 21 , 7 , 6 , 0.71 , ' 2019-02-17 '),
( 21 , 4 , 7 , 0.843 , ' 2019-02-11 '),
( 21 , 6 , 7 , 0.848 , ' 2019-03-04 '),
( 22 , 2 , 2 , 1.659 , ' 2019-01-30 '),
( 22 , 3 , 3 , 1.748 , ' 2018-11-25 '),
( 22 , 5 , 3 , 1.81 , ' 2019-02-28 '),
( 22 , 3 , 4 , 1.282 , ' 2019-03-01 '),
( 22 , 5 , 6 , 0.715 , ' 2019-02-03 '),
( 22 , 4 , 7 , 0.824 , ' 2019-03-03 '),
( 22 , 6 , 7 , 0.826 , ' 2019-02-17 '),
( 22 , 7 , 7 , 0.821 , ' 2019-03-02 '),
( 23 , 7 , 1 , 1.591 , ' 2019-01-17 '),
( 23 , 8 , 1 , 1.509 , ' 2019-02-26 '),
( 23 , 3 , 2 , 1.71 , ' 2019-02-17 '),
( 23 , 2 , 2 , 1.645 , ' 2019-02-27 '),
( 23 , 1 , 2 , 1.625 , ' 2019-01-17 '),
( 23 , 8 , 3 , 1.809 , ' 2019-01-30 '),
( 23 , 2 , 3 , 1.808 , ' 2019-02-03 '),
( 23 , 5 , 4 , 1.382 , ' 2019-02-11 '),
( 23 , 5 , 4 , 1.284 , ' 2019-02-17 '),
( 23 , 6 , 6 , 0.69 , ' 2019-01-30 '),
( 23 , 4 , 7 , 0.846 , ' 2018-12-30 '),
( 23 , 5 , 7 , 0.861 , ' 2019-02-25 '),
( 23 , 6 , 7 , 0.794 , ' 2019-02-10 '),
( 24 , 1 , 1 , 1.506 , ' 2019-01-23 '),
( 24 , 3 , 1 , 1.521 , ' 2018-11-25 '),
( 24 , 3 , 2 , 1.636 , ' 2019-03-04 '),
( 24 , 7 , 2 , 1.607 , ' 2019-01-30 '),
( 24 , 7 , 3 , 1.806 , ' 2019-01-23 '),
( 24 , 7 , 3 , 1.854 , ' 2018-11-25 '),
( 24 , 8 , 4 , 1.25 , ' 2019-03-01 '),
( 24 , 2 , 5 , 1.44 , ' 2019-02-03 '),
( 24 , 1 , 5 , 1.439 , ' 2019-01-17 '),
( 24 , 7 , 6 , 0.698 , ' 2019-02-11 '),
( 24 , 6 , 6 , 0.75 , ' 2019-02-17 '),
( 24 , 6 , 7 , 0.768 , ' 2019-02-25 '),
( 24 , 2 , 7 , 0.904 , ' 2019-03-03 '),
( 25 , 6 , 3 , 1.764 , ' 2019-02-27 '),
( 25 , 5 , 3 , 1.859 , ' 2019-03-03 '),
( 25 , 3 , 6 , 0.674 , ' 2019-02-11 '),
( 25 , 4 , 6 , 0.672 , ' 2018-12-30 '),
( 25 , 3 , 7 , 0.878 , ' 2019-02-28 '),
( 26 , 4 , 2 , 1.671 , ' 2019-01-15 '),
( 26 , 4 , 3 , 1.784 , ' 2018-12-30 '),
( 26 , 8 , 3 , 1.849 , ' 2019-03-01 '),
( 26 , 5 , 4 , 1.27 , ' 2019-02-26 '),
( 26 , 8 , 4 , 1.256 , ' 2019-02-11 '),
( 26 , 1 , 5 , 1.442 , ' 2018-11-25 '),
( 26 , 4 , 6 , 0.818 , ' 2019-03-02 '),
( 26 , 8 , 7 , 0.928 , ' 2019-03-01 '),
( 26 , 7 , 7 , 0.925 , ' 2018-11-25 '),
( 27 , 5 , 1 , 1.583 , ' 2019-01-23 '),
( 27 , 6 , 3 , 1.811 , ' 2019-03-01 '),
( 27 , 7 , 3 , 1.765 , ' 2019-02-26 '),
( 27 , 1 , 4 , 1.281 , ' 2019-03-02 '),
( 27 , 6 , 4 , 1.287 , ' 2018-12-30 '),
( 27 , 8 , 5 , 1.445 , ' 2019-01-15 '),
( 27 , 6 , 6 , 0.697 , ' 2019-02-11 '),
( 27 , 1 , 6 , 0.756 , ' 2019-03-01 '),
( 27 , 4 , 6 , 0.7 , ' 2019-03-04 '),
( 28 , 1 , 7 , 0.9 , ' 2019-02-11 '),
( 29 , 7 , 1 , 1.555 , ' 2019-02-03 '),
( 30 , 3 , 1 , 1.526 , ' 2019-01-30 '),
( 30 , 7 , 3 , 1.766 , ' 2019-02-26 '),
( 30 , 2 , 3 , 1.878 , ' 2019-03-04 '),
( 30 , 2 , 4 , 1.329 , ' 2018-12-30 '),
( 30 , 3 , 5 , 1.393 , ' 2019-01-15 '),
( 30 , 5 , 6 , 0.653 , ' 2019-01-15 '),
( 31 , 2 , 1 , 1.479 , ' 2019-02-27 '),
( 31 , 3 , 3 , 1.823 , ' 2019-02-11 '),
( 31 , 5 , 3 , 1.801 , ' 2019-02-28 '),
( 31 , 1 , 3 , 1.876 , ' 2018-11-25 '),
( 31 , 7 , 4 , 1.317 , ' 2018-12-30 '),
( 31 , 3 , 6 , 0.65 , ' 2019-02-25 '),
( 32 , 2 , 2 , 1.674 , ' 2019-03-01 '),
( 32 , 4 , 3 , 1.739 , ' 2019-02-26 '),
( 32 , 6 , 7 , 0.918 , ' 2019-01-23 '),
( 33 , 2 , 6 , 0.711 , ' 2019-01-15 '),
( 33 , 4 , 7 , 0.886 , ' 2019-02-28 '),
( 34 , 1 , 6 , 0.66 , ' 2019-01-17 ') ;`;
    return result;
}

module.exports = initialize;

