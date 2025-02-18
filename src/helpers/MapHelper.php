<?php
/**
 * Google Maps plugin for Craft CMS
 *
 * Maps in minutes. Powered by the Google Maps API.
 *
 * @author    Double Secret Agency
 * @link      https://plugins.doublesecretagency.com/
 * @copyright Copyright (c) 2014, 2021 Double Secret Agency
 */

namespace doublesecretagency\googlemaps\helpers;

use craft\base\Element;
use craft\helpers\StringHelper;
use craft\models\FieldLayout;
use doublesecretagency\googlemaps\fields\AddressField;
use doublesecretagency\googlemaps\models\Location;

/**
 * Class MapHelper
 * @since 4.0.0
 */
class MapHelper
{

    /**
     * Generate a random ID.
     *
     * @param string|null $prefix
     * @return string
     */
    public static function generateId(string $prefix = null): string
    {
        // Generate random hash
        $hash = StringHelper::randomString(6);

        // Return new ID (with optional prefix)
        return ($prefix ? "{$prefix}-{$hash}" : $hash);
    }

    // ========================================================================= //

    /**
     * Retrieve all coordinates from a specified set of locations.
     *
     * Coordinates will always be returned inside of a parent array,
     * to compensate for Elements with multiple Address Fields.
     *
     * @param mixed $locations
     * @param array $options
     * @return array Collection of coordinate sets
     */
    public static function extractCoords($locations, array $options = []): array
    {
        // If it's a Location Model, return the coordinates
        if ($locations instanceof Location) {
            return [$locations->getCoords()];
        }

        // If it's a natural set of coordinates, return as-is
        if (is_array($locations) && isset($locations['lat'], $locations['lng'])) {
            return [$locations];
        }

        // Force array syntax
        if (!is_array($locations)) {
            $locations = [$locations];
        }

        // If field option was specified, set filter using array syntax
        if (isset($options['field']) && is_array($options['field'])) {
            $filter = $options['field'];
        } else if (isset($options['field']) && is_string($options['field'])) {
            $filter = [$options['field']];
        } else {
            $filter = false;
        }

        // Initialize results array
        $results = [];

        // Loop through all locations
        foreach ($locations as $location) {

            // If it's a Location Model, add the coordinates to results
            if ($location instanceof Location) {
                $results[] = $location->getCoords();
            }

            // If it's a natural set of coordinates, add them to results as-is
            if (is_array($location) && isset($location['lat'], $location['lng'])) {
                $results[] = $location;
            }

            // If not an Element, skip it
            if (!($location instanceof Element)) {
                continue;
            }

            // Get all fields associated with Element
            /** @var FieldLayout $layout */
            $layout = $location->getFieldLayout();
            $fields = $layout->getFields();

            // Loop through all relevant fields
            foreach ($fields as $f) {
                // If filter field was specified but doesn't match, skip it
                if ($filter && !in_array($f->handle, $filter, true)) {
                    continue;
                }
                // If not an Address Field, skip it
                if (!($f instanceof AddressField)) {
                    continue;
                }
                // Get value of Address Field
                $address = $location->{$f->handle};
                // If no Address, skip
                if (!$address) {
                    continue;
                }
                // Add coordinates to results
                if ($address->hasCoords()) {
                    $results[] = array_merge(
                        $address->getCoords(),
                        ['id' => "{$location->id}-{$f->handle}"]
                    );
                }
            }

        }

        // Return final results
        return $results;
    }

    // ========================================================================= //

    /**
     * Convert a set of coordinates into a string.
     *
     * @param array $coords
     * @return string
     */
    public static function stringCoords(array $coords): string
    {
        // If misconfigured coordinates, return empty string
        if (!isset($coords['lat'],$coords['lng'])) {
            return '';
        }

        // Return stringified coordinates
        return "{$coords['lat']},{$coords['lng']}";
    }

}
